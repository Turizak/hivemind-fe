import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import CreateIcon from "../assets/CreateIcon";

const CreateDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <CreateIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="p-2 m-2 text-sm rounded-md bg-gray-300 text-black drop-shadow-md">
        <DropdownMenu.Group>
          <DropdownMenu.Item className="p-2 hover:bg-black hover:text-white hover:rounded-md">
            <Link to="/createContent">Create Content</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-black hover:text-white hover:rounded-md">
            <Link to="/createHive">Create Hive</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default CreateDropdown;
