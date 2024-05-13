// @ts-nocheck
import { MessageContext } from "../context/MessageContext";
import { useContext, useState } from "react";

const useSetError = () => {
  const { message, setMessage } = useContext(MessageContext);
  const [newMessage, setNewMessage] = useState("");

  const handleSetError = (msg) => {
    setNewMessage(msg);
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  return handleSetError;
};

export default useSetError;
