import getIso from "../utils/tokenTools/getIso";
import { Link } from "react-router-dom";
import CommentIcon from "../assets/CommentIcon";
import { TContent } from "../types";
// import UpvoteIcon from "../assets/UpvoteIcon";
// import DownvoteIcon from "../assets/DownvoteIcon";

const ContentContentContainer = (props: TContent) => {
  return (
    <div
      className="p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md"
      id={props.Id}
    >
      <div className="flex gap-2">
        {/* Vertical Vote Container */}
        {/* <div className="hidden md:flex flex-col p-2 h-max rounded-md text-sm hover:bg-gray-200">
          <button className="block hover:cursor-pointer">
            <UpvoteIcon />
          </button>
          <p className="p-2"></p>
          <button>
            <DownvoteIcon />
            <p className="p-2"></p>
          </button>
        </div> */}
        <div>
          {/* User & Time Container */}
          <Link to={`/hive/uuid/${props.HiveUuid}/content`}>
          <div className="flex w-max p-2 rounded-md text-sm">
            <p className="hover:cursor-pointer hover:underline">
                {props.Hive}  | {getIso(props.Created.Time)}
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
            {/* <div className="flex w-max p-2 justify-evenly rounded-md text-sm md:hidden">
              <button>
                <UpvoteIcon />
              </button>
              <p className="px-2">{props.Upvote}</p>
              <button>
                <DownvoteIcon />
              </button>
              <p className="px-2">{props.Downvote}</p>
            </div> */}
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
