// SPDX-License-Identifier: Apache-2.0

// @ts-nocheck
import { createContext, useState } from "react";

const ErrorContext = createContext({
  errorMsg: '',
  setErrorMsg: () => {},
});

const ErrorProvider = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState("");
  return (
    <ErrorContext.Provider value={{ errorMsg, setErrorMsg }}>
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider };
