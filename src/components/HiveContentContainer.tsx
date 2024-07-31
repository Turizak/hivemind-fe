import { Link } from "react-router-dom";
import useIso from "../hooks/useIso";
import { TContent } from "../types";
import UpvoteIcon from "../assets/UpvoteIcon";
import UpvoteIconTrue from "../assets/UpvoteIconTrue";
import DownvoteIcon from "../assets/DownvoteIcon";
import DownvoteIconTrue from "../assets/DownvoteIconTrue"

const HiveContentContainer = ({ item }: { item: TContent }) => {

function showVotes() {
  const votingState = {
    upvote: false,
    downvote: false
  }
  const upvotes = localStorage.getItem("Upvotes")
  const downvotes = localStorage.getItem("Downvotes")
  if (upvotes?.includes(item.Uuid)) {
    votingState.upvote = true
  } if (downvotes?.includes(item.Uuid)) {
    votingState.downvote = true
  }
  return votingState
}

const votingState = showVotes()

  return (
    <div
      className="p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md"
      id={item.Id}
    >
      <div className="flex gap-2">
        {/* Vertical Vote Container */}
        <div className="hidden md:flex flex-col p-2 h-max rounded-md text-sm">
          <button className="block hover:cursor-pointer">
            {votingState.upvote === true ? <UpvoteIconTrue /> : <UpvoteIcon />}
          </button>
          <p className="p-2"></p>
          <button className="block hover:cursor-pointer">
            {votingState.downvote === true ? <DownvoteIconTrue /> : <DownvoteIcon />}
            <p className="p-2"></p>
          </button>
        </div>
        <div>
          {/* User & Time Container */}
          <div className="flex w-max p-2 rounded-md text-sm">
            <p>
              {item.Hive} | {useIso(item.Created.Time)}
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
              <button>
              {votingState.upvote === true ? <UpvoteIconTrue /> : <UpvoteIcon />}
              </button>
              <p className="px-2">{item.Upvote}</p>
              <Link to={`/content/uuid/${item.Uuid}`}>
                <button>
                {votingState.downvote === true ? <DownvoteIconTrue /> : <DownvoteIcon />}
                </button>
              </Link>
              <p className="px-2"></p>
            </div>
            {/* Comment Container */}
            <div className="flex w-max p-2 justify-evenly rounded-md text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="px-1">{item.CommentCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiveContentContainer;
