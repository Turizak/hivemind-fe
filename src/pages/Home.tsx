import useGET from "../hooks/useGET";
import HomeContentContainer from "../components/HomeContentContainer";
import { TContent } from "../types";

const Home = () => {
  const baseURL = import.meta.env.VITE_BASEURL;


  const { data, error, isLoading, isFetching, isError } = useGET(
    baseURL + "/hive",
  );

  return (
    <>
        <div className="text-center text-3xl p-8 w-full bg-yellow-400">
        Select a Hive
      </div>
      {isLoading ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          Loading...
        </span>
      ) : isFetching ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          Loading...
        </span>
      ) : isError ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          {error?.name}: Please refresh
        </span>
      ) : (
        data &&
        data.map((item: TContent) => (
          <HomeContentContainer key={item.Id} item={item} />
        ))
      )}
    </>
  );
};

export default Home;
