import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import CreateIcon from "../assets/CreateIcon";

const CreateDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <CreateIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="p-2 m-2 text-sm rounded-md bg-yellow-400 text-black drop-shadow-md">
        <DropdownMenu.Group>
          <DropdownMenu.Item className="p-2 hover:bg-black hover:text-white hover:rounded-md">
            <button>Create Content</button>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-black hover:text-white hover:rounded-md">
            <button>Create a Hive</button>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default CreateDropdown;
