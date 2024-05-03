import useGetContent from "../hooks/useGetContent";
import useGetComments from "../hooks/useGetComments";
import { useParams } from "react-router-dom";
import CommentContainer from "../components/CommentContainer";
import AddComment from "../components/AddComment";
import { TContent } from "../types";

const Content = () => {
  const params = useParams();
  const baseURL = import.meta.env.VITE_BASEURL;
  const {
    data: content,
    error: contentError,
    isLoading: isContentLoading,
    isFetching: isContentFetching,
    isError: isContentError,
  } = useGetContent(baseURL + "/content/uuid/" + params.uuid);
  const {
    data: comments,
    error: commentsError,
    refetch: commentsRefetch,
    isLoading: isCommentsLoading,
    isFetching: isCommentsFetching,
    isError: isCommentsError,
  } = useGetComments(baseURL + "/content/uuid/" + params.uuid + "/comment");

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
        <>{/* <ContentContentContainer {...content} /> */}</>
      )}
      <div>
        <AddComment refetch={commentsRefetch} />
      </div>
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
        comments.map((item: TContent) => (
          <CommentContainer key={item.Id} item={item} />
        ))
      )}
    </>
  );
};

export default Content;
