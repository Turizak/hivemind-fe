import { useQuery } from "@tanstack/react-query";
import getNewAccessToken from "../utils/getNewAccessToken";
import validateToken from "../utils/validateToken";

const useGetHives = (url: string) => {
 /*
  This function calls the validateToken helper function.  The validateToken helper function returns an object with two properties - accessTokenExpired and refreshTokenExpired.  Both properties are booleans.
  If the access token is expired, a new token will be fetched from the server before the getData call.  
  If the access token is fresh, the getData calls fires normally.
  If the refresh token is expired, local storage is deleted and the function returns early.  This is create an error on the page, instructing the user to refresh.  
  Upon refresh, the user will be routed to the login page.
  */
  const getHives = async () => {
    const token = await validateToken()
    if (token?.refreshTokenExpired === true) {
      localStorage.clear()
      return
    }
    if (token?.accessTokenExpired === true) {
      await getNewAccessToken();
    }
    const data = await getData(url);
    return data;
    }
  /*
Async GET request
*/
const getData = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status}: Failed to fetch`);
  }
  const data = await response.json();
  return data;
};

  const { data, error, refetch, isLoading, isError, isFetching } = useQuery({
    queryKey: ["hive", url],
    queryFn: getHives,
  });

  return { data, error, refetch, isLoading, isError, isFetching };
};

export default useGetHives;
