import { createContext, useState } from "react";
import { TSession } from "../types";

const SessionContext = createContext<TSession | undefined>(undefined);

export const SessionProvider = ({ children }: any) => {
  const [session, setSession] = useState<TSession>({
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem('refreshToken'),
    username: localStorage.getItem("username"),
    accountUUID: localStorage.getItem("accountUUID"),
    accessTokenExpiry: localStorage.getItem('accessTokenExpiry'),
    refreshTokenExpiry: localStorage.getItem('refreshTokenExpiry'),
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
