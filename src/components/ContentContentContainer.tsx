import { useState } from "react";
import useIso from "../hooks/useIso";
import useVote from "../hooks/useVote";
import CommentIcon from "../assets/CommentIcon";
import { TContent } from "../types";
import UpvoteIcon from "../assets/UpvoteIcon";
import DownvoteIcon from "../assets/DownvoteIcon";

const ContentContentContainer = (props: TContent) => {
  {
    /* URL Variables */
  }
  const baseURL = import.meta.env.VITE_BASEURL;
  const upvoteURL = baseURL + "/content/uuid/" + props.Uuid + "/add-upvote";
  const downvoteURL = baseURL + "/content/uuid/" + props.Uuid + "/add-downvote";

  {
    /* State and Setters.  Initial state is received from parent component via GET.  Setter function calls useState and increments the value by 1. */
  }
  const [upvoteCount, setUpvoteCount] = useState<number>(props.Upvote);
  const [downvoteCount, setDownvoteCount] = useState<number>(props.Downvote);
  const upvoteSetter = () => setUpvoteCount((prev: any) => prev + 1);
  const downvoteSetter = () => setDownvoteCount((prev: any) => prev + 1);

  {
    /* Vote Hooks.  Params are the PATCH URL and the setter function */
  }
  const { mutate: upvote } = useVote(upvoteURL, upvoteSetter);
  const { mutate: downvote } = useVote(downvoteURL, downvoteSetter);

  {
    /* Vote Click Function.  Pass in the mutution to call */
  }
  function vote(fn: any) {
    fn();
  }

  return (
    <div
      className="p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md"
      id={props.Id}
    >
      <div className="flex gap-2">
        {/* Vertical Vote Container */}
        <div className="hidden md:flex flex-col p-2 h-max rounded-md text-sm hover:bg-gray-200">
          <button
            className="block hover:cursor-pointer"
            onClick={() => vote(upvote)}
          >
            <UpvoteIcon />
          </button>
          <p className="p-2">{upvoteCount}</p>
          <button onClick={() => vote(downvote)}>
            <DownvoteIcon />
            <p className="p-2">{downvoteCount}</p>
          </button>
        </div>
        <div>
          {/* User & Time Container */}
          <div className="flex w-max p-2 rounded-md text-sm">
            <p>
              {props.Hive} | {useIso(props.Created.Time)}
            </p>
          </div>
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
              <button>
                <UpvoteIcon />
              </button>
              <p className="px-2">{props.Upvote}</p>
              <button>
                <DownvoteIcon />
              </button>
              <p className="px-2">{props.Downvote}</p>
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
