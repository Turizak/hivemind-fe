import { useContext} from "react";
import SessionContext from "../context/SessionProvider";

const useSession = () => {
    return useContext(SessionContext);
}

export default useSession;