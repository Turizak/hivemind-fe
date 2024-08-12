import getIso from "../utils/tokenTools/getIso";
import { TComment } from "../types";
import UpvoteIcon from "../assets/UpvoteIcon";
import DownvoteIcon from "../assets/DownvoteIcon";
import useShowVotes from "../hooks/useShowVotes";
const ReplyContainer = (props: TComment) => {
  const votingState = useShowVotes(props.Uuid);
  return (
    <div
      className="p-3 mx-auto my-4 max-w-xl bg-gray-400 xs:rounded-none sm:rounded-md"
      id={props.Id}
    >
      <div className="flex gap-2">
        <div>
          {/* User & Time Container */}
          <div className="flex w-max p-2 rounded-md text-sm">
            <p>
              {props.Author} | {getIso(props.Created.Time)}
            </p>
            <p></p>
          </div>
          {/* Comment Body Container */}
          <div className="p-2 rounded-md flex-none max-w-md">
            <p>{props.Deleted === true ? "Comment Deleted" : props.Message}</p>
          </div>
          {/* Horizontal Vote Container */}
          <div className="flex gap-2">
            <div className="flex w-max p-2 justify-evenly rounded-md text-sm hover:bg-gray-200">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyContainer;
