import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  MenuItem,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon as SolidIconUser,
  CodeBracketSquareIcon,
  Bars2Icon,
  MoonIcon,
  SunIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
// nav list component
const navListItems = [
  {
    label: "Male",
    icon: SolidIconUser,
  },
  {
    label: "Female",
    icon: UserCircleIcon,
  },
  {
    label: "Browse",
    icon: BuildingStorefrontIcon,
  },
  {
    label: "About Us",
    icon: UserGroupIcon,
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center">
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="icon"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 md:rounded-full dark:text-white  dark:hover:bg-gray-900">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900 dark:!text-white"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function UserNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 md:rounded-full md:pl-6 !bg-white dark:!bg-black dark:!border-gray-800">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium md:w-[20%] w-40 dark:text-white"
        >
          Project Shop
        </Typography>
        <div className="hidden md:block   md:w-[60%] ">
          <div className="flex justify-center ">
            <NavList />
          </div>
        </div>
        <div className="w-full md:hidden flex justify-end ">
          <IconButton
            size="sm"
            color="blue-gray"
            onClick={() => setDarkMode(!darkMode)}
            variant="text"
            className=" mr-2 "
          >
            {!darkMode ? (
              <MoonIcon className="h-6 w-6 " />
            ) : (
              <SunIcon className="h-6 w-6 dark:!text-white" />
            )}
          </IconButton>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className=" mr-2 md:hidden "
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        </div>

        <IconButton
          size="sm"
          color="blue-gray"
          onClick={() => setDarkMode(!darkMode)}
          variant="text"
          className="ml-auto mr-2 md:w-[20%] hidden md:block "
        >
          {!darkMode ? (
            <MoonIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6 dark:!text-white" />
          )}
        </IconButton>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll md:hidden ">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
