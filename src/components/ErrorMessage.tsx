// SPDX-License-Identifier: Apache-2.0

import { useContext } from "react";
import { ErrorContext } from "../context/ErrorContext";

const ErrorMessage = () => {
  const { errorMsg } = useContext(ErrorContext);
  return (
    <>
      { errorMsg && (
        <span className="flex justify-center p-2 bg-red-500 text-white">
          {errorMsg}
        </span>
      )}
    </>
  );
};

export default ErrorMessage;
