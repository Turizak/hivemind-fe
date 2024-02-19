import { useRef } from "react";

const AddComment = () => {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  return (
    <>
      <div className="flex justify-center">
        <textarea
          className="w-4/5 border border-black rounded-md p-3 md:mx-auto my-2 max-w-xl resize-none"
          name="writeComment"
          rows={4}
          ref={commentRef}
        ></textarea>
      </div>
      <div>
        <button className="w-4/5 justify-center md:w-auto rounded-md flex p-3 mx-auto my-2 max-w-xl bg-black text-white hover:cursor-pointer hover:bg-gray-300 hover:text-black">
          Add Comment
        </button>
      </div>
    </>
  );
};

export default AddComment;
