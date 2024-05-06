import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const AddComment = (props: any) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Add Comment");
  const [textareaValue, setTextareaValue] = useState<string>("");
  const params = useParams();
  const baseURL = import.meta.env.VITE_BASEURL;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDisabled(true);
    const commentObject: any = {
      message: textareaValue,
    };
    mutate(commentObject);
  }
  const { mutate } = useMutation({
    mutationFn: postComment,
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
      setButtonText("Comment Added!");
      setDisabled(true);
      setTimeout(() => {
        setButtonText("Add Comment");
        setTextareaValue("");
        setDisabled(false);
        props.refetch();
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  }

  function textareaHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextareaValue(e.target.value);
  }

  return (
    <>
      <div className="flex justify-center">
        <textarea
          className="w-4/5 border border-black rounded-md p-3 md:mx-auto my-2 max-w-xl resize-none"
          name="writeComment"
          rows={4}
          minLength={1}
          maxLength={2048}
          value={textareaValue}
          onChange={textareaHandler}
          disabled={disabled}
        ></textarea>
      </div>
      <div>
        <button
          className="w-4/5 justify-center md:w-auto rounded-md flex p-3 mx-auto my-2 max-w-xl bg-black text-white hover:cursor-pointer hover:bg-gray-300 hover:text-black"
          onClick={handleSubmit}
          disabled={disabled}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default AddComment;
