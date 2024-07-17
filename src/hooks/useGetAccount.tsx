import { useQuery } from "@tanstack/react-query";
import useUserValidation from "./useUserValidation";

const useGetAccount = (url: string) => {
  const { accessToken, currentTime, expiry } = useUserValidation();
  const getData = async () => {
    try {
      if (currentTime > expiry) {
        throw new Error("Time Error");
      }
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, error, refetch, isLoading, isError, isFetching } = useQuery({
    queryKey: ["accounts"],
    queryFn: getData,
  });

  return { data, error, refetch, isLoading, isError, isFetching };
};

export default useGetAccount;
