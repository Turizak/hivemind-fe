import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const Message = () => {
  const { message } = useContext(MessageContext);
  return (
    <>
      {message && (
        <span className="flex justify-center p-2 bg-red-500 text-white">
          {message}
        </span>
      )}
    </>
  );
};

export default Message;
