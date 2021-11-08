import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Header() {
  return (
    <div className="flex">
      {/* flex  md:flex-row justify-between items-center
       <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      */}
      <p className="max-w-6xl mx-auto px-4 py-10 md:py-20">Icon </p>
      <div className=" max-w-6xl mx-auto px-4 py-10 md:py-20 space-x-8 text-3xl  ">
        <a className="text-gray-800 hover:scale-110">Projects</a>
        <a className="text-gray-800 bg-green-500 active:bg-green-700">About</a>
        <a className=" text-gray-800 ">Experience </a>
        <a className="text-gray-800 motion-safe:hover:scale-110">Contact</a>
        <GitHubIcon className="" />
        <EmailIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default Header;

{
  /*  
   <div className="header flex py-3 space-x-4 decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 ">
      <div className="header__left text-black sm:w-16 md:w-32 lg:w-48  bg-green-500 active:bg-green-700">
        <p>Icon</p>
      </div>

      <div className="  header__middle flex space-x-4 px-64">
        <p className=" transform motion-safe:hover:scale-110"> About </p>
        <p className=" motion-safe:hover:scale-110"> Project</p>
        <p className=" hover:bg-red-500"> Contact Me</p>
        <p className=" hover:bg-red-500 motion-safe:hover:scale-110"> Resume</p>
        {/* hover: as move on it , color gets changed* }
        </div>
        </div>
    */
}
