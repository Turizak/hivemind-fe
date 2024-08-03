//@ts-nocheck
import { useQuery } from "@tanstack/react-query";
import getNewAccessToken from "../utils/getNewAccessToken";
import validateToken from "../utils/validateToken";

const useGetComments = (url: string) => {
  let comments = [];
  let replies = [];
  /*
  This function calls the validateToken helper function.  The validateToken helper function returns an object with two properties - accessTokenExpired and refreshTokenExpired.  Both properties are booleans.
  If the access token is expired, a new token will be fetched from the server before the getData call.  
  If the access token is fresh, the getData calls fires normally.
  If the refresh token is expired, local storage is deleted and the function returns early.  This is create an error on the page, instructing the user to refresh.  
  Upon refresh, the user will be routed to the login page.
  */
  const getComments = async () => {
    const token = await validateToken();
    if (token?.refreshTokenExpired === true) {
      localStorage.clear();
      return;
    }
    if (token?.accessTokenExpired === true) {
      await getNewAccessToken();
    }
    const data = await getData(url);
    return data;
  };

  const getData = async () => {
    try {
      if (currentTime > expiry) {
        getNewAccessToken();
      }
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.accessToken}`,
        },
      });
      const data = await response.json();
      // Separate comments and replies
      data.forEach((element) => {
        if (element.ParentUuid.length == 0) {
          comments.push({ ...element, Replies: [] }); // Add an empty array for replies
        } else {
          replies.push(element);
        }
      });

      // Sort comments and replies by creation time
      comments = comments.sort(
        (a, b) => new Date(a.Created.Time) - new Date(b.Created.Time),
      );
      replies = replies.sort(
        (a, b) => new Date(a.Created.Time) - new Date(b.Created.Time),
      );

      // Pair comments with their replies
      comments.forEach((comment) => {
        const matchingReplies = replies.filter(
          (reply) => reply.ParentUuid === comment.Uuid,
        );
        comment.Replies.push(...matchingReplies);
      });

      return comments;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, refetch, error, isLoading, isError, isFetching } = useQuery({
    queryKey: ["comments", url],
    queryFn: getComments,
  });

  return { data, refetch, error, isLoading, isError, isFetching };
};

export default useGetComments;
