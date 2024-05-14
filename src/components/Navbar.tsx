import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import UserIcon from "../assets/UserIcon";
import CreateIcon from "../assets/CreateIcon";

const Navbar = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
      <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
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
            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              <CreateIcon />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="bg-red-600 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <li className="row-span-3 grid">
                  <NavigationMenu.Link href="/createContent" asChild>
                    <a className="flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]">
                      Content
                    </a>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="/createHive" asChild>
                    <a>Hive</a>
                  </NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          {/* Create Account */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <UserIcon />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul>
                <li>
                  <NavigationMenu.Link href="/" asChild>
                    <a>Login</a>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="/createAccount" asChild>
                    <a>Create Account</a>
                  </NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
export default Navbar;
