import useGetContent from '../hooks/useGetContent';
import HiveContentContainer from '../components/HiveContentContainer';
import { useParams } from 'react-router-dom';
import { TContent } from '../types';

const Hive = () => {
  const params = useParams();
  const baseURL = import.meta.env.VITE_BASEURL;
  const { data, error, isLoading, isFetching, isError } = useGetContent(
    baseURL + '/hive/uuid/' + params.hiveUuid + '/content'
  );

  return (
    <>
      <div className="text-center text-3xl p-8 w-full bg-gray-300">{data[0].Hive}
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
          Error: {error?.message}
        </span>
      ) : (
        data &&
        data.map((item: TContent) => (
          <HiveContentContainer key={item.Id} item={item} />
        ))
      )}
    </>
  );
};

export default Hive;
