import { useState, useEffect } from "react";
import UpvoteIcon from "../assets/UpvoteIcon";
import DownvoteIcon from "../assets/DownvoteIcon";

const VoteContainer = (item: any) => {
  const [votingState, setVotingState] = useState({
    upvoteState: false,
    downvoteState: false,
    upvoteCount: item.Upvote,
    downvoteCount: item.Downvote,
    upvoteIconDisplay: "",
    downvoteIconDisplay: "",
    upvoteIconFill: "rgba(0, 0, 0, 1)",
    downvoteIconFill: "rgba(0, 0, 0, 1)",
    upvoteIconStroke: "none",
    downvoteIconStroke: "none",
  });

  function renderVotingContainer(Uuid: any) {
    const upvotes = localStorage.getItem("Upvotes");
    const downvotes = localStorage.getItem("Downvotes");
    if (upvotes?.includes(Uuid)) {
      votingState.upvoteState = true;
    }
    if (downvotes?.includes(Uuid)) {
      votingState.downvoteState = true;
    }
    if (votingState.upvoteState === true) {
      setVotingState((votingState) => ({
        ...votingState,
        upvoteIconFill: "rgba(251,191,36,1)",
        upvoteIconStroke: "rgba(0, 0, 0, 1)",
        downvoteIconDisplay: "hidden ",
      }));
    }
    if (votingState.downvoteState === true) {
      setVotingState((votingState) => ({
        ...votingState,
        downvoteIconFill: "rgba(251,191,36,1)",
        downvoteIconStroke: "rgba(0, 0, 0, 1)",
        upvoteIconDisplay: "hidden ",
      }));
    }
  }

  useEffect(() => {
    renderVotingContainer(item.Uuid);
  }, []);

  function upvoteClickHandler() {
    setVotingState((votingState) => ({
      ...votingState,
      upvoteState: !votingState.upvoteState,
    }));
    console.log(votingState.upvoteState);
    if (votingState.upvoteState === true) {
      setVotingState((votingState) => ({
        ...votingState,
        upvoteIconFill: "rgba(251,191,36,1)",
        upvoteIconStroke: "rgba(0, 0, 0, 1)",
        upvoteCount: votingState.upvoteCount + 1,
        downvoteIconDisplay: "hidden ",
      }));
    }
    if (votingState.upvoteState === false) {
      setVotingState((votingState) => ({
        ...votingState,
        upvoteIconFill: "rgba(0,0,0,1)",
        upvoteIconStroke: "none",
        upvoteCount: votingState.upvoteCount - 1,
        downvoteIconDisplay: "",
      }));
    }
  }
  function downvoteClickHandler() {}

  return (
    <>
      <button
        className={votingState.upvoteIconDisplay + "block hover:cursor-pointer"}
        onClick={upvoteClickHandler}
      >
        <UpvoteIcon
          fill={votingState.upvoteIconFill}
          stroke={votingState.upvoteIconStroke}
        />
      </button>
      <p className={votingState.upvoteIconDisplay + "p-2"}>
        {votingState.upvoteCount}
      </p>
      <button
        className={
          votingState.downvoteIconDisplay + "block hover:cursor-pointer"
        }
      >
        <DownvoteIcon
          fill={votingState.downvoteIconFill}
          stroke={votingState.downvoteIconStroke}
        />
      </button>
      <p className={votingState.downvoteIconDisplay + "p-2"}>
        {votingState.downvoteCount}
      </p>
    </>
  );
};

export default VoteContainer;
