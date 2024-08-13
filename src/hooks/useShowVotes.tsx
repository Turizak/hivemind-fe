const useShowVotes = (Uuid: string) => {
  const votingState = {
    upvoteState: false,
    downvoteState: false,
    upvoteCount: localStorage.getItem("Upvotes"),
    downvoteCount: localStorage.getItem("Downvotes"),
    upvoteIconDisplay: true,
    downvoteIconDisplay: false,
    upvoteIconFill: "rgba(0, 0, 0, 1)",
    downvoteIconFill: "rgba(0, 0, 0, 1)",
    upvoteIconStroke: "none",
    downvoteIconStroke: "none",
  };
  const upvotes = localStorage.getItem("Upvotes");
  const downvotes = localStorage.getItem("Downvotes");
  if (upvotes?.includes(Uuid)) {
    votingState.upvoteState = true;
  }
  if (downvotes?.includes(Uuid)) {
    votingState.downvoteState = true;
  }
  return votingState;
};

export default useShowVotes;
