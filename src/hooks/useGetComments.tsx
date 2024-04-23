import { useQuery } from "@tanstack/react-query";

const useGetComments = (url: string) => {
  const token = localStorage.getItem("accessToken");
  const getData = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

  const { data, refetch, error, isLoading, isError, isFetching } = useQuery({
    queryKey: ["comments"],
    queryFn: getData,
  });

  return { data, refetch, error, isLoading, isError, isFetching };
};

export default useGetComments;
