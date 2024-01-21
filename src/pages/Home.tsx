import useGet from '../hooks/useGet';
import ContentContainer from '../components/ContentContainer';

const Home = () => {
  const baseURL = import.meta.env.VITE_BASEURL;
  const { data, error, isLoading, isFetching, isError } = useGet(
    baseURL + '/content'
  );

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : isFetching ? (
        <span>Loading...</span>
      ) : isError ? (
        error?.message
      ) : (
        data &&
        data.map((item: any) => <ContentContainer key={item.Id} item={item} />)
      )}
    </>
  );
};

export default Home;
