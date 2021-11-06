import React from "react";

function Hero() {
  return (
    <div className="inline-flex space-x-10">
      <p>this is the hero section</p>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:scale-110 ">
        <div class="md:flex">
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Netflix Project
            </div>
            <button class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              The link
            </button>
            <p class="mt-2 text-gray-500">
              In this project, the react.js is used and.......
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:scale-110">
        <div class="md:flex">
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Amazon Project
            </div>
            <link_a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              The link
            </link_a>
            <p class="mt-2 text-gray-500">
              In this project, the react.js is used and.......
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
