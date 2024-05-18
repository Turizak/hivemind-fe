import { useQuery } from "@tanstack/react-query";
import SessionContext from "../context/SessionProvider";
import { useContext } from "react";

const useGetAccount = (url: string) => {
   const {session }: any = useContext(SessionContext)
   const token = session.accessToken;
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
      queryKey: ["accounts"],
      queryFn: getData,
    });
  
    return { data, error, refetch, isLoading, isError, isFetching };
  };

export default useGetAccount