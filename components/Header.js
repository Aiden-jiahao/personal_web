import React from "react";
function Header() {
  return (
    <div className=" flex items-center md:border-2  rounded-full py-2  md:shadow-sm space-x-4 ">
      <h1 className="text-3xl"> Project</h1>
      <h1 className="text-3xl"> Contact Me</h1>
      <h1 className="text-3xl text-red-700 "> Resume</h1>
    </div>
  );
}

export default Header;
