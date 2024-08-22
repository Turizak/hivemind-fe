import getIso from "../utils/tokenTools/getIso";
import useGetVotes from "../hooks/useGetVotes";
import { Link } from "react-router-dom";
import { TContent } from "../types";
import VoteContainer from "./ContentVoteContainer";
import CommentIcon from "../assets/CommentIcon";

const ContentContentContainer = (props: TContent) => {
  const baseURL = import.meta.env.VITE_BASEURL;
  const voteURL = baseURL + "/content/uuid/" + props.Uuid;
  const { data, isLoading, isFetching, isError } = useGetVotes(
    baseURL + "/content/votes"
  );
  return (
    <div
      className="p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md"
      id={props.Id}
    >
      <div className="flex gap-2">
        {/* Vertical Vote Container */}
        <div className="hidden md:flex flex-col p-2 h-max rounded-md text-sm">
          {isLoading || isFetching ? (
            "..."
          ) : isError ? (
            "Error"
          ) : (
            <VoteContainer {...props} voteData={data} voteURL={voteURL} />
          )}
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
              {isLoading || isFetching ? (
                "..."
              ) : isError ? (
                "Error"
              ) : (
                <VoteContainer {...props} voteData={data} voteURL={voteURL} />
              )}
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
