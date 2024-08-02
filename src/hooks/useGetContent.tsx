import { useQuery } from "@tanstack/react-query";
import getNewAccessToken from "../utils/getNewAccessToken";
import validateToken from "../utils/validateToken";

const useGetContent = (url: string) => {
  const getData = async (url: string) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    if (!response.ok) {
      throw new Error(`${response.status}: Failed to fetch`);
    }
    const data = await response.json();
    return data;
  };

  const getContent = async () => {
    const token = await validateToken()
    if (token?.refreshTokenExpired === true) {
      localStorage.clear()
    }
    if (token?.accessTokenExpired === true) {
      await getNewAccessToken();
    }
    const data = await getData(url);
    return data;
    }

  const { data, error, refetch, isLoading, isError, isFetching } = useQuery({
    queryKey: ['content', url],
    queryFn: getContent,
  });

  return { data, error, refetch, isLoading, isError, isFetching };
};

export default useGetContent;