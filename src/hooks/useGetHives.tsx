import { useQuery } from "@tanstack/react-query";

const useGetHives = (url: string) => {
  const accessToken = localStorage.getItem("accessToken")
  const getData = async () => {
    try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error)
  };
}

  const { data, error, refetch, isLoading, isError, isFetching } = useQuery({
    queryKey: ["hive"],
    queryFn: getData,
  });

  return { data, error, refetch, isLoading, isError, isFetching };
};

export default useGetHives;
