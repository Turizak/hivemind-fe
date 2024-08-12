import { Link } from "react-router-dom";
import { useState } from "react";
import getIso from "../utils/tokenTools/getIso";
import useShowVotes from "../hooks/useShowVotes";
import { TContent } from "../types";
import UpvoteIcon from "../assets/UpvoteIcon";
import DownvoteIcon from "../assets/DownvoteIcon";
import CommentIcon from "../assets/CommentIcon";

const HiveContentContainer = ({ item }: { item: TContent }) => {
  const [hidden, setHidden] = useState("hidden ");
  const votingState = useShowVotes(item.Uuid);

  return (
    <div
      className="p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md"
      id={item.Id}
    >
      <div className="flex gap-2">
        {/* Vertical Vote Container */}
        <div className="hidden md:flex flex-col p-2 h-max rounded-md text-sm">
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
        </div>
        <div>
          {/* User & Time Container */}
          <div className="flex w-max p-2 rounded-md text-sm">
            <p>
              {item.Hive} | {getIso(item.Created.Time)}
            </p>
          </div>
          {/* Content Title Container */}
          <Link to={`/content/uuid/${item.Uuid}`}>
            <div className="p-2 mt-2 rounded-md max-w-md hover:cursor-pointer hover:bg-gray-200">
              <p className="text-xl">{item.Title}</p>
            </div>
          </Link>
          {/* Content Body Container */}
          <div className="p-2 rounded-md flex-none max-w-md">
            <p className="truncate ...">{item.Message}</p>
          </div>
          {/* Horizontal Vote Container */}
          <div className="flex gap-2">
            <div className="flex w-max p-2 justify-evenly rounded-md text-sm md:hidden">
              {votingState.upvote === true ? (
                <>
                  <button className="block hover:cursor-pointer">
                    <UpvoteIcon
                      fill="rgba(251, 191, 36, 1)"
                      stroke="rgba(0, 0, 0, 1)"
                    />
                  </button>
                  <p className="p-2">{item.Upvote}</p>
                </>
              ) : votingState.downvote === false &&
                votingState.upvote === false ? (
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
              ) : votingState.downvote === false &&
                votingState.upvote === false ? (
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
            </div>
            {/* Comment Container */}
            <div className="flex w-max p-2 justify-evenly rounded-md text-sm">
              <CommentIcon />
              <p className="px-1">{item.CommentCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiveContentContainer;
