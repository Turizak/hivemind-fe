import getIso from "../utils/tokenTools/getIso";
// import VoteContainer from "./VoteContainer";
import { TComment } from "../types";

const ReplyContainer = (props: TComment) => {
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
            {/* <div className="flex w-max p-2 justify-evenly rounded-md text-sm hover:bg-gray-200">
              <VoteContainer {...props}  />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyContainer;
