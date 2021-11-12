import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-black dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between mt-8">
          <div>
            Developed by{"  "}
            <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
              <a
                className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50"
                href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              >
                Aiden Liu
              </a>
            </div>
          </div>

          <a href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
            <p className=" text-gray-800 dark:text-gray-300">
              aidenjiahao@gmail.com
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
