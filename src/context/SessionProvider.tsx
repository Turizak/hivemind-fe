import { createContext, useState, ReactNode } from "react";
import { TSession } from "../types";

type SessionContextType = {
  session: TSession;
  setSession: React.Dispatch<React.SetStateAction<TSession>>;
};

const defaultSession: TSession = {
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem('refreshToken'),
  username: localStorage.getItem("username"),
  accountUUID: localStorage.getItem("accountUUID"),
  accessTokenExpiry: localStorage.getItem('accessTokenExpiry'),
  refreshTokenExpiry: localStorage.getItem('refreshTokenExpiry'),
  contentUpvotes: localStorage.getItem('contentUpvotes'),
  contentDownvotes: localStorage.getItem('contentDownvotes'),
  commentVotes: localStorage.getItem('commentsVoted'),
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<TSession>(defaultSession);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;