import useGet from '../hooks/useGet';
import ContentContainer from '../components/ContentContainer';

const Home = () => {
  const baseURL = import.meta.env.VITE_BASEURL;
  const { data } = useGet(baseURL + '/content');

  return (
    <>
      {data &&
        data.map((item: any) => <ContentContainer key={item.Id} item={item} />)}
    </>
  );
};

export default Home;
