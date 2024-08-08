import getIso from "../utils/tokenTools/getIso";
import { Link } from "react-router-dom";
import { TContent } from "../types";
import useShowVotes from "../hooks/useShowVotes";
import CommentIcon from "../assets/CommentIcon";
import UpvoteIcon from "../assets/UpvoteIcon";
import DownvoteIcon from "../assets/DownvoteIcon";

const ContentContentContainer = (props: TContent) => {
  const votingState = useShowVotes(props.Uuid);
  return (
    <div
      className="p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md"
      id={props.Id}
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
              <p className="p-2">{props.Upvote}</p>
            </>
          ) : votingState.downvote === false && votingState.upvote === false ? (
            <>
              <button className="block hover:cursor-pointer">
                <UpvoteIcon />
              </button>
              <p className="p-2">{props.Upvote}</p>
            </>
          ) : null}
          {votingState.downvote === true ? (
            <>
              <button className="block hover:cursor-pointer">
                <DownvoteIcon
                  fill="rgba(251, 191, 36, 1)"
                  stroke="rgba(0, 0, 0, 1)"
                />
              </button>
              <p className="p-2">{props.Downvote}</p>
            </>
          ) : votingState.downvote === false && votingState.upvote === false ? (
            <>
              <button className="block hover:cursor-pointer">
                <DownvoteIcon />
              </button>
              <p className="p-2">{props.Downvote}</p>
            </>
          ) : null}
        </div>
        <div>
          {/* User & Time Container */}
          <Link to={`/hive/uuid/${props.HiveUuid}/content`}>
            <div className="flex w-max p-2 rounded-md text-sm">
              <p className="hover:cursor-pointer hover:underline">
                {props.Hive} | {getIso(props.Created.Time)}
              </p>
            </div>
          </Link>
          {/* Content Title Container */}
          <div className="p-2 mt-2 rounded-md max-w-md">
            <p className="text-xl">{props.Title}</p>
          </div>
          {/* Content Body Container */}
          <div className="p-2 rounded-md flex-none max-w-md">
            <p className="truncate ...">{props.Message}</p>
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
                  <p className="p-2">{props.Upvote}</p>
                </>
              ) : votingState.downvote === false &&
                votingState.upvote === false ? (
                <>
                  <button className="block hover:cursor-pointer">
                    <UpvoteIcon />
                  </button>
                  <p className="p-2">{props.Upvote}</p>
                </>
              ) : null}
              {votingState.downvote === true ? (
                <>
                  <button className="block hover:cursor-pointer">
                    <DownvoteIcon
                      fill="rgba(251, 191, 36, 1)"
                      stroke="rgba(0, 0, 0, 1)"
                    />
                  </button>
                  <p className="p-2">{props.Downvote}</p>
                </>
              ) : votingState.downvote === false &&
                votingState.upvote === false ? (
                <>
                  <button className="block hover:cursor-pointer">
                    <DownvoteIcon />
                  </button>
                  <p className="p-2">{props.Downvote}</p>
                </>
              ) : null}
            </div>
            {/* Comment Container */}
            <div className="flex w-max p-2 justify-evenly rounded-md text-sm">
              <CommentIcon />
              <p className="px-1">{props.CommentCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentContentContainer;
