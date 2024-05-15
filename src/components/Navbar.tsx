import { Link } from "react-router-dom";
import CreateDropdown from "./CreateDropdown";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <ul className="flex justify-between">
        <li className="p-2">
          <Link to="/home">Hivemind</Link>
        </li>
        <div className="flex">
          <li className="p-2">
            <CreateDropdown />
          </li>
          <li className="p-2">
            <UserDropdown />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
