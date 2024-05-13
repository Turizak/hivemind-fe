// @ts-nocheck
import { ErrorContext } from "../context/ErrorContext";
import { useContext, useState } from "react";

const useSetError = () => {
  const { errorMsg, setErrorMsg } = useContext(ErrorContext);
  const [newErrorMsg, setNewErrorMsg] = useState("");

  const handleSetError = (msg) => {
    setNewErrorMsg(msg);
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };
  return handleSetError;
};

export default useSetError;
