import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const Navbar = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="sm:center flex list-none bg-black text-white justify-between px-3 py-5 lg:flex">
        {/* Hamburger Menu */}
        <NavigationMenu.Item className="md:hidden">
          <NavigationMenu.Trigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Link />
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* Hivemind Logo */}
        <NavigationMenu.Item className="pr-48">
          <NavigationMenu.Link href="/home">Hivemind</NavigationMenu.Link>
        </NavigationMenu.Item>
        {/* Add Content */}
        <div className="flex gap-4">
          <NavigationMenu.Item>
          <NavigationMenu.Link href="/createContent">Create Content</NavigationMenu.Link>
          </NavigationMenu.Item>
        {/* Add Hive */}
          <NavigationMenu.Item>
          <NavigationMenu.Link href="/createHive">Create Hive</NavigationMenu.Link>
          </NavigationMenu.Item>
        {/* Create Account */}
          <NavigationMenu.Item>
          <NavigationMenu.Link href="/createAccount">Create Account</NavigationMenu.Link>
          </NavigationMenu.Item>
          {/* User Menu */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>User</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Sub>
                <NavigationMenu.List />
                <NavigationMenu.Viewport />
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.NavigationMenuItem>
            <NavigationMenu.Link href="/">Login</NavigationMenu.Link>
          </NavigationMenu.NavigationMenuItem>
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
export default Navbar;
