import React from "react";

function Header() {
  return (
    <div className="header flex py-3   space-x-4 ">
      <div className="header__left text-black sm:w-16 md:w-32 lg:w-48  bg-green-500 active:bg-green-700">
        <p>Icon</p>
      </div>

      <div className="  header__right   flex space-x-4 ">
        <p className=" transform motion-safe:hover:scale-110"> About me</p>
        <p className=" motion-safe:hover:scale-110"> Project</p>
        <p className=" hover:bg-red-500"> Contact Me</p>
        <p className=" hover:bg-red-500 motion-safe:hover:scale-110"> Resume</p>
        {/* hover: as move on it , color gets changed*/}
      </div>
    </div>
  );
}

export default Header;

{
  /*  <div className=" flex md:border-2  rounded-full py-2  md:shadow-sm space-x-4 ">
      <h1> Icon</h1>
      <h1> About me</h1>
      <h1> Project</h1>
      <h1> Contact Me</h1>
      <h1> Resume</h1>
    </div>*/
}
