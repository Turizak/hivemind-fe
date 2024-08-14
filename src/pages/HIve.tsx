import useGET from "../hooks/useGET";
import useGetVotes from "../hooks/useGetVotes";
import HiveContentContainer from "../components/HiveContentContainer";
import { useParams } from "react-router-dom";
import { TContent } from "../types";

const Hive = () => {
  const params = useParams();
  const baseURL = import.meta.env.VITE_BASEURL;

  useGetVotes(baseURL + "/content/votes");
  const { data, error, refetch, isLoading, isFetching, isError } = useGET(
    baseURL + "/hive/uuid/" + params.hiveUuid + "/content"
  );

  return (
    <>
      <div className="text-center text-3xl p-8 w-full bg-yellow-400">
        {isLoading || isFetching ? (
          <span>Loading...</span>
        ) : isError ? (
          <span>Error: {error?.message}</span>
        ) : data && data.length > 0 ? (
          data[0].Hive
        ) : (
          "There's nothing here..."
        )}
      </div>
      {isLoading || isFetching ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          Loading...
        </span>
      ) : isError ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          Error: {error?.message}
        </span>
      ) : (
        data &&
        data.map((data: TContent) => (
          <HiveContentContainer
            key={data.Id}
            item={data}
            refetchVotes={refetch}
          />
        ))
      )}
    </>
  );
};

export default Hive;
