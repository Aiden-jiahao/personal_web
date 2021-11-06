import React from "react";

function Header() {
  return (
    <div className="header flex py-3 bg-black  space-x-4 ">
      <div className="header__left text-white sm:w-16 md:w-32 lg:w-48 ">
        <p>Icon</p>
      </div>

      <div className="header__right  flex space-x-4 bg-green-500 md:bg-red-500 lg:bg-green-500">
        <p> About me</p>
        <p> Project</p>
        <p> Contact Me</p>
        <p> Resume</p>
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
