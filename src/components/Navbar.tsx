import { Link } from "react-router-dom";
import { useContext } from "react";
import SessionContext from "../context/SessionProvider";
import CreateDropdown from "./CreateDropdown";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  // @ts-expect-error
  const { session } = useContext(SessionContext);
  return (
    <nav className="bg-black text-white">
      <ul className="flex justify-between">
        <li className="p-2">
          <Link to="/">Hivemind</Link>
        </li>
        <div className="flex">
          <li className="p-2">
           {session.accessToken ? <CreateDropdown /> : null } 
          </li>
          <li className="p-2">
            {session.accessToken ? <UserDropdown /> : null }
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
