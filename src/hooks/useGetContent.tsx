import { useQuery } from "@tanstack/react-query";
import getCurrentTime from "../utils/getCurrentTime";
import getExpiry from "../utils/getExpiry";
import getNewAccessToken from "../utils/getNewAccessToken";

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

  const fooGetData = async () => {
    const currentTime = getCurrentTime();
    const expiry = getExpiry();
    if (currentTime > expiry) {
      await getNewAccessToken();
    }
    const data = await getData(url);
    return data;
  };

  const { data, error, refetch, isLoading, isError, isFetching } = useQuery({
    queryKey: ['content', url],
    queryFn: fooGetData,
  });

  return { data, error, refetch, isLoading, isError, isFetching };
};

export default useGetContent;