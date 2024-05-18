import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "@tanstack/react-form";

const AddComment = (props: any) => {
  const [buttonText, setButtonText] = useState<string>("Add Comment");
  const params = useParams();
  const baseURL = import.meta.env.VITE_BASEURL;

  const form = useForm({
    defaultValues: {
      message: "",
    },
    onSubmit: async ({ value }) => {
      //@ts-expect-error
      postComment(value);
    },
  });

  async function postComment(body: string) {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        baseURL + "/content/uuid/" + params.uuid + "/comment",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      if (data) {
        setButtonText("Comment Added!");
        setTimeout(() => {
          setButtonText("Add Comment");
          props.refetch();
        }, 500);
      }
    } catch (error) {
      console.error(error);
      setButtonText("There was an error - please refresh");
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <div className="flex justify-center">
          <form.Field
            name="message"
            children={(message) => (
              <textarea
                name="writeComment"
                rows={4}
                minLength={1}
                maxLength={2048}
                className="w-4/5 border border-black rounded-md p-3 md:mx-auto my-2 max-w-xl resize-none"
                value={message.state.value}
                onChange={(e) => message.handleChange(e.target.value)}
                data-testid="addCommentMessage"
              />
            )}
          />
        </div>
        <div>
          <button
            className="w-4/5 justify-center md:w-auto rounded-md flex p-3 mx-auto my-2 max-w-xl bg-black text-white hover:cursor-pointer hover:bg-gray-300 hover:text-black"
            type="submit"
            data-testid="addCommentBtn"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddComment;
