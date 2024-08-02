import { useQuery } from "@tanstack/react-query";

const useGetContent = (url: string) => {
  const getData = async () => {

      const response = await fetch(url, {
        method: "GET",
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

  const { data, error, refetch, isLoading, isError, isFetching } = useQuery({
    queryKey: ["content"],
    queryFn: getData,
  });

  return { data, error, refetch, isLoading, isError, isFetching };
};

export default useGetContent;