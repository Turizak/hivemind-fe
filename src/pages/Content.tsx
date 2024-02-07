import useGetContent from '../hooks/useGetContent';
import useGetComments from '../hooks/useGetComments';
import { useParams } from 'react-router-dom';
import ContentContentContainer from '../components/ContentContentContainer';
import CommentContainer from '../components/CommentContainer';

const Content = () => {
  const params = useParams();
  const baseURL = import.meta.env.VITE_BASEURL;
  const {
    data: content,
    error: contentError,
    isLoading: isContentLoading,
    isFetching: isContentFetching,
    isError: isContentError,
  } = useGetContent(baseURL + '/content/uuid/' + params.uuid);
  const {
    data: comments,
    error: commentsError,
    isLoading: isCommentsLoading,
    isFetching: isCommentsFetching,
    isError: isCommentsError,
  } = useGetComments(baseURL + '/content/uuid/' + params.uuid + '/comments');

  return (
    <>
      {isContentLoading ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          Loading...
        </span>
      ) : isContentFetching ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          Loading...
        </span>
      ) : isContentError ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          Error: {contentError?.message}
        </span>
      ) : (
        <>
          <ContentContentContainer {...content} />
        </>
      )}
      <div className='flex justify-center'>
      <textarea className='border border-black rounded-md p-3' name="writeComment" rows={4} cols={63}>
        This is where you type your comment
      </textarea>
      </div>
      <button className="w-4/5 justify-center md:w-auto rounded-md flex p-3 mx-auto my-4 bg-black text-white hover:cursor-pointer hover:bg-gray-400 hover:text-black">
        Add Comment
      </button>
      {isCommentsLoading ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          Loading...
        </span>
      ) : isCommentsFetching ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          Loading...
        </span>
      ) : isCommentsError ? (
        <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
          Error: {commentsError?.message}
        </span>
      ) : (
        comments &&
        comments.map((item: any) =>
          <CommentContainer key={item.Id} item={item} />
        )
      )}
      </>
  );
};

export default Content;
