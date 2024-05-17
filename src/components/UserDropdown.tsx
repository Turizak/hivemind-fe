import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SessionContext from "../context/SessionProvider";
import { TSession } from "../types";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import UserIcon from "../assets/UserIcon";

const UserDropdown = () => {
  const { setSession }: any = useContext(SessionContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    setSession((prevState: TSession) => ({
      ...prevState,
      accessToken: "",
      username: "",
      accountUUID: "",
    }));
    navigate("/login");
  }
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <UserIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="p-2 m-2 text-sm rounded-md bg-gray-300 text-black drop-shadow-md">
        <DropdownMenu.Group>
          <DropdownMenu.Item className="p-2 hover:bg-black hover:text-white hover:rounded-md">
            <Link to="/profile">My Profile</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-black hover:text-white hover:rounded-md">
            <button onClick={logout}>Logout</button>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UserDropdown;
