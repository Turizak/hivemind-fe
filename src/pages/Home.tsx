import useGetContent from "../hooks/useGetContent";
import HomeContentContainer from "../components/HomeContentContainer";
import { TContent } from "../types";

const Home = () => {
  const baseURL = import.meta.env.VITE_BASEURL;
  const { data, error, refetch, isLoading, isFetching, isError } =
    useGetContent(baseURL + "/content");

    async function validateCookie() {
      try {
        const response = await fetch('http://localhost:8080/account/token/validate', {
          credentials: "include",
        })
        const data = await response.json()
        console.log(data)
        if (!response.ok) {
          throw new Error(`${response.status}`)
        }
      }
      catch (error) {
        console.error(error)
      }
    }

  return (
    <>
    <button className="border" onClick={validateCookie}>Validate Cookie</button>
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
          Error: {error?.message}
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
