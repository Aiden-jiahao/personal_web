import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "next-themes";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);xx
  }, []);

  return (
    /* Left  Section*/
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20 ">
      <div className="flex  md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="font-semibold text-xl dark:text-gray-100">
                Aiden Liu
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300">
                Front-End Developer
              </p>
            </a>
          </Link>
        </div>

        {/* Middle Section*/}
        <div className="space-x-8 hidden md:block">
          <Link href="/about">
            <a
              className={`text-base  ${
                router.asPath === "/about"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              About
              {router.asPath === "/about"}
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`text-base  ${
                router.asPath === "/projects"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              Projects
              {router.asPath === "/projects"}
            </a>
          </Link>

          <Link href="/contact">
            <a
              className={`text-base  ${
                router.asPath === "/contact"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              Contact
              {router.asPath === "/contact"}
            </a>
          </Link>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1BHLMNlHykknTjynUa-F80Zvp5XxySx4D/view?usp=sharing"
            rel="noopener noreferrer"
            className=" dark:text-gray-300 font-normal"
          >
            Resume
          </a>
        </div>

        {/* Right Section*/}
        <div className="space-x-4 flex flex-row items-center">
          <a href="https://github.com/Aiden-jiahao?tab=repositories">
            <GitHubIcon />
          </a>

          <a href="https://www.linkedin.com/in/aiden-liu/">
            <LinkedInIcon />
          </a>

          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {mounted &&
              (theme === "dark" ? (
                <DarkModeIcon className="w-4 h-4 text-yellow-500 dark:text-yellow-500" />
              ) : (
                <WbSunnyIcon className="w-4 h-4 text-yellow-500 dark:text-yellow-500" />
              ))}
          </button>
        </div>
      </div>

      {/* when view size is less than md */}
      <div className="space-x-8 block md:hidden mt-4">
        <Link href="/about">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            About
          </a>
        </Link>
        <Link href="/projects">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            Projects
          </a>
        </Link>

        <Link href="/contact">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
}
