import { createContext, useState } from "react";
import { TSession } from "../types";

const SessionContext = createContext<TSession | undefined>(undefined);

export const SessionProvider = ({ children }: any) => {
  const [session, setSession] = useState<TSession>({
    accessToken: localStorage.getItem("accessToken"),
    username: localStorage.getItem("username"),
    accountUUID: localStorage.getItem("accountUUID"),
    refreshToken: localStorage.getItem('refreshToken'),
    accessTokenExpiry: localStorage.getItem('accessTokenExpiry'),
    // email: null
  });

  return (
    // @ts-expect-error
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
