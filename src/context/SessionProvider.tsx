// @ts-nocheck
import { createContext, useState} from "react";
import { TSession } from "../types";

const SessionContext = createContext({})
export const SessionProvider = ({children}) => {
    const [session, setSession] = useState<TSession>({
      accessToken: localStorage.getItem('accessToken'),
      username: localStorage.getItem('username')
    //   refreshToken: localStorage.getItem('refreshToken')
    // email: null
    })

  return (
    <SessionContext.Provider value={{session, setSession}}>
        {children}
    </SessionContext.Provider>
  )
}

export default SessionContext;
