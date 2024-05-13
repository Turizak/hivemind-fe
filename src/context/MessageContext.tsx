// @ts-nocheck
import { createContext, useState } from "react";

const MessageContext = createContext({
  message: '',
  setMessage: () => {},
});

const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
