import { useState } from "react";
import useShowVotes from "../hooks/useShowVotes";
import UpvoteIcon from "../assets/UpvoteIcon";
import DownvoteIcon from "../assets/DownvoteIcon";

const VoteContainer = (item: any) => {
  const [hidden, setHidden] = useState("hidden ");
  const votingState = useShowVotes(item.Uuid);

  function clickHandler() {}

  return (
    <>
      {votingState.upvote === true ? (
        <>
          <button
            className="block hover:cursor-pointer"
            onClick={() => (votingState.upvote = false)}
          >
            <UpvoteIcon
              fill="rgba(251, 191, 36, 1)"
              stroke="rgba(0, 0, 0, 1)"
            />
          </button>
          <p className="p-2">{item.Upvote}</p>
        </>
      ) : votingState.downvote === false && votingState.upvote === false ? (
        <>
          <button className="block hover:cursor-pointer">
            <UpvoteIcon />
          </button>
          <p className="p-2">{item.Upvote}</p>
        </>
      ) : (
        <>
          <button className={hidden + "block hover:cursor-pointer"}>
            <UpvoteIcon />
          </button>
          <p className={hidden + "p-2"}>{item.Upvote}</p>
        </>
      )}
      {votingState.downvote === true ? (
        <>
          <button className="block hover:cursor-pointer">
            <DownvoteIcon
              fill="rgba(251, 191, 36, 1)"
              stroke="rgba(0, 0, 0, 1)"
            />
          </button>
          <p className="p-2">{item.Downvote}</p>
        </>
      ) : votingState.downvote === false && votingState.upvote === false ? (
        <>
          <button className="block hover:cursor-pointer">
            <DownvoteIcon />
          </button>
          <p className="p-2">{item.Downvote}</p>
        </>
      ) : (
        <>
          <button className={hidden + "block hover:cursor-pointer"}>
            <DownvoteIcon />
          </button>
          <p className={hidden + "p-2"}>{item.Downvote}</p>
        </>
      )}
    </>
  );
};

export default VoteContainer;
