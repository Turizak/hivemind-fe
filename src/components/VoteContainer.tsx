import { useState, useEffect } from "react";
import { TContent } from "../types";
import useGetVotes from "../hooks/useGetVotes";
import useUpvote from "../hooks/useUpvote";
import UpvoteIcon from "../assets/UpvoteIcon";
import DownvoteIcon from "../assets/DownvoteIcon";

const VoteContainer = ({ Upvote, Downvote, Uuid }: TContent) => {
  const baseURL = import.meta.env.VITE_BASEURL;
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

  const { data } = useGetVotes(baseURL + "/content/votes");

  useEffect(() => {
    const upvotes = data.Upvotes;
    const downvotes = data.Downvotes;

    setVotingState((prevState) => {
      const newUpvoteState = upvotes?.includes(Uuid) ?? false;
      const newDownvoteState = downvotes?.includes(Uuid) ?? false;

      return {
        ...prevState,
        upvoteState: newUpvoteState,
        downvoteState: newDownvoteState,
        upvoteIconFill: newUpvoteState
          ? "rgba(251,191,36,1)"
          : "rgba(0, 0, 0, 1)",
        upvoteIconStroke: newUpvoteState ? "rgba(0, 0, 0, 1)" : "none",
        downvoteIconFill: newDownvoteState
          ? "rgba(251,191,36,1)"
          : "rgba(0, 0, 0, 1)",
        downvoteIconStroke: newDownvoteState ? "rgba(0, 0, 0, 1)" : "none",
        upvoteIconDisplay: newDownvoteState ? "hidden " : "",
        downvoteIconDisplay: newUpvoteState ? "hidden " : "",
      };
    });
  }, [Uuid]);

  const upvoteClickHandler = () => {
    if (votingState.upvoteState === false) {
      useUpvote(baseURL + "/content/uuid/" + Uuid + "/add-upvote");
    }
    if (votingState.upvoteState === true) {
      useUpvote(baseURL + "/content/uuid/" + Uuid + "/remove-upvote");
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
  const downvoteClickHandler = () => {
    if (votingState.downvoteState === false) {
      useUpvote(baseURL + "/content/uuid/" + Uuid + "/add-downvote");
    }
    if (votingState.downvoteState === true) {
      useUpvote(baseURL + "/content/uuid/" + Uuid + "/remove-downvote");
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
        onClick={downvoteClickHandler}
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
