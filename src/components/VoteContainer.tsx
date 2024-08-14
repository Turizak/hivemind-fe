import { useState, useEffect } from "react";
import { TContent } from "../types";
import useUpvote from "../hooks/useUpvote";
import UpvoteIcon from "../assets/UpvoteIcon";
import DownvoteIcon from "../assets/DownvoteIcon";

const VoteContainer = ({
  Upvote,
  Downvote,
  Uuid,
  voteData,
  voteURL,
}: TContent & { voteURL: string; voteData: any }) => {
  const [votingState, setVotingState] = useState({
    upvoteState: false,
    downvoteState: false,
    upvoteCount: Upvote,
    downvoteCount: Downvote,
    upvoteIconDisplay: "",
    downvoteIconDisplay: "",
    upvoteIconFill: "rgba(0, 0, 0, 1)",
    downvoteIconFill: "rgba(0, 0, 0, 1)",
    upvoteIconStroke: "none",
    downvoteIconStroke: "none",
  });

  const markVotes = () => {
    if (voteData?.Upvotes && voteData.Upvotes.includes(Uuid)) {
      setVotingState((prev) => ({
        ...prev,
        upvoteState: true,
        upvoteIconFill: "rgba(251,191,36,1)",
        upvoteIconStroke: "rgba(0, 0, 0, 1)",
        downvoteIconDisplay: "hidden ",
      }));
    }
    if (voteData?.Downvotes && voteData.Downvotes.includes(Uuid)) {
      setVotingState((prev) => ({
        ...prev,
        downvoteState: true,
        downvoteIconFill: "rgba(251,191,36,1)",
        downvoteIconStroke: "rgba(0, 0, 0, 1)",
        upvoteIconDisplay: "hidden ",
      }));
    }
  };

  useEffect(() => {
    markVotes();
  }, [voteData]);

  const upvoteClickHandler = (voteURL: string) => {
    if (votingState.upvoteState === false) {
      useUpvote(voteURL + "/add-upvote");
    }
    if (votingState.upvoteState === true) {
      useUpvote(voteURL + "/remove-upvote");
    }
    setVotingState((prevState) => {
      const newUpvoteState = !prevState.upvoteState;
      const newUpvoteCount = newUpvoteState
        ? prevState.upvoteCount + 1
        : prevState.upvoteCount - 1;

      return {
        ...prevState,
        upvoteState: newUpvoteState,
        upvoteCount: newUpvoteCount,
        upvoteIconFill: newUpvoteState
          ? "rgba(251,191,36,1)"
          : "rgba(0, 0, 0, 1)",
        upvoteIconStroke: newUpvoteState ? "rgba(0, 0, 0, 1)" : "none",
        downvoteIconDisplay: newUpvoteState ? "hidden " : "",
      };
    });
  };
  const downvoteClickHandler = (voteURL: string) => {
    if (votingState.downvoteState === false) {
      useUpvote(voteURL + "/add-downvote");
    }
    if (votingState.downvoteState === true) {
      useUpvote(voteURL + "/remove-downvote");
    }
    setVotingState((prevState) => {
      const newDownvoteState = !prevState.downvoteState;
      const newDownvoteCount = newDownvoteState
        ? prevState.downvoteCount + 1
        : prevState.downvoteCount - 1;

      return {
        ...prevState,
        downvoteState: newDownvoteState,
        downvoteCount: newDownvoteCount,
        downvoteIconFill: newDownvoteState
          ? "rgba(251,191,36,1)"
          : "rgba(0, 0, 0, 1)",
        downvoteIconStroke: newDownvoteState ? "rgba(0, 0, 0, 1)" : "none",
        upvoteIconDisplay: newDownvoteState ? "hidden " : "",
      };
    });
  };

  return (
    <>
      <button
        className={votingState.upvoteIconDisplay + "block hover:cursor-pointer"}
        onClick={() => upvoteClickHandler(voteURL)}
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
        onClick={() => downvoteClickHandler(voteURL)}
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
