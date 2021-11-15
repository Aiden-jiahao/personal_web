import React from "react";
export default function Footer() {
  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20 ">
      <div className="h-0.5 w-full bg-gray-600"></div>
      <div className="flex flex-col md:space-y-0 md:flex-row justify-between mt-8">
        <div>
          Developed by{"  "}
          <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
            <a
              className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50"
              href="/about"
            >
              Aiden Liu
            </a>
          </div>
        </div>
        <a href="/contact">
          <p>aidenjiahao@gmail.com</p>
        </a>
      </div>
    </div>
  );
}
