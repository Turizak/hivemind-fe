import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import UserIcon from "../assets/UserIcon";

const UserDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <UserIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="p-2 m-2 text-sm rounded-md bg-yellow-400 text-black drop-shadow-md">
        <DropdownMenu.Group>
          <DropdownMenu.Item className="p-2 hover:bg-black hover:text-white hover:rounded-md">
            <button>My Profile</button>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UserDropdown;
