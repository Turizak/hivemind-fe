import { useQuery } from "@tanstack/react-query";

const useGetHives = (url: string) => {
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

  const { data, error, refetch, isLoading, isError, isFetching } = useQuery({
    queryKey: ["hive"],
    queryFn: getData,
  });

  return { data, error, refetch, isLoading, isError, isFetching };
};

export default useGetHives;
