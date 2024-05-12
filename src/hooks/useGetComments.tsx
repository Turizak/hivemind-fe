//@ts-nocheck
import { useQuery } from "@tanstack/react-query";

const useGetComments = (url: string) => {
  const token = localStorage.getItem("accessToken");
  let comments = [];
  let replies = [];
  const getData = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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
      comments = comments.sort((a, b) => new Date(a.Created.Time) - new Date(b.Created.Time));
      replies = replies.sort((a, b) => new Date(a.Created.Time) - new Date(b.Created.Time));
    
      // Pair comments with their replies
      comments.forEach((comment) => {
        const matchingReplies = replies.filter((reply) => reply.ParentUuid === comment.Uuid);
        comment.Replies.push(...matchingReplies);
      });
    
      return comments;
  };

  const { data, refetch, error, isLoading, isError, isFetching } = useQuery({
    queryKey: ["comments"],
    queryFn: getData,
  });

  return { data, refetch, error, isLoading, isError, isFetching };
};

export default useGetComments;
