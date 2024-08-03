const useShowVotes = (Uuid: string) => {
    const votingState = {
      upvote: false,
      downvote: false,
    };
    const upvotes = localStorage.getItem("Upvotes");
    const downvotes = localStorage.getItem("Downvotes");
    if (upvotes?.includes(Uuid)) {
      votingState.upvote = true;
    }
    if (downvotes?.includes(Uuid)) {
      votingState.downvote = true;
    }
    return votingState;
  }

  export default useShowVotes;