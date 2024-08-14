import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "@tanstack/react-form";
import getIso from "../utils/tokenTools/getIso";
import useGetVotes from "../hooks/useGetVotes";
import VoteContainer from "./VoteContainer";
import { TComment } from "../types";
import ReplyContainer from "./ReplyContainer";
import CommentIcon from "../assets/CommentIcon";

const CommentContainer = (props: any) => {
  // URL Variables
  const baseURL = import.meta.env.VITE_BASEURL;
  const params = useParams();
  const voteURL = baseURL + "/comment/uuid/" + props.Uuid;

  // State
  const [replyTextareaShow, setReplyTextareaShow] = useState<boolean>(false);
  const [replyButtonShow, setReplyButtonShow] = useState<boolean>(false);
  const [replyButtonText, setReplyButtonText] = useState<string>("Add Reply");

  useGetVotes(baseURL + "/content/votes");

  // ----- Reply Start ----- //
  const form = useForm({
    defaultValues: {
      message: "",
    },
    onSubmit: async ({ value }) => {
      //@ts-expect-error
      postReply(value);
    },
  });

  // Add Reply Toggle Control
  function replyToggle() {
    setReplyTextareaShow(!replyTextareaShow);
    setReplyButtonShow(!replyButtonShow);
  }

  // POST Reply
  async function postReply(body: string) {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        baseURL +
          "/content/uuid/" +
          params.uuid +
          "/comment/" +
          props.Uuid +
          "/reply",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      if (response.ok) {
        setReplyButtonText("Reply Added!");
        setTimeout(() => {
          setReplyButtonText("Add Reply");
          props.refetch();
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      setReplyButtonText("There was an error - please refresh");
    }
  }

  // ----- Reply End ----- //

  return (
    <div
      className="p-3 mx-auto my-4 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md"
      id={props.Id}
    >
      <div className="flex gap-2">
        <div className="w-full">
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
              <VoteContainer {...props} voteURL={voteURL} />
              {/* Comment Container */}
              <button
                className="flex w-max p-2 justify-evenly rounded-md text-sm hover:bg-gray-200"
                onClick={replyToggle}
              >
                <CommentIcon />
                <p className="pl-1">{props.Replies.length}</p>
              </button>
            </div>
          </div>
          {/* Reply Input Start */}
          <div className="mx-auto bg-gray-300 xs:rounded-none sm:rounded-md">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              {replyTextareaShow && (
                <form.Field
                  name="message"
                  children={(message) => (
                    <textarea
                      name="writeComment"
                      rows={4}
                      minLength={1}
                      maxLength={2048}
                      className="w-full border border-black rounded-md p-3 md:mx-auto my-2 max-w-xl resize-none"
                      value={message.state.value}
                      onChange={(e) => message.handleChange(e.target.value)}
                    />
                  )}
                />
              )}
              {replyButtonShow && (
                <button
                  className={
                    "w-4/5 justify-center md:w-auto rounded-md flex p-3 mx-auto max-w-xl bg-black text-white hover:cursor-pointer hover:bg-gray-400 hover:text-black"
                  }
                  type="submit"
                >
                  {replyButtonText}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      {props.Replies.map((item: TComment) => (
        <ReplyContainer key={item.Id} {...item} />
      ))}
    </div>
  );
};

export default CommentContainer;
