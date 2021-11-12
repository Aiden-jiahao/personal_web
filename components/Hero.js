import React from "react";
import ReactPlayer from "react-player";
function Hero() {
  return (
    <div className="inline-flex space-x-10">
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
      <div className="px-10 py-10 flex space-x-4">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=JxjD0ez0zEg"
          controls
          playbackRate={1}
          width="700px"
          height="400px"

          /* controls = Display native player controls 
            playbackRate = Set the playback rate of the player
            width = Set the width of the player
            height = Set the height of the player*/
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=SJRgJbGr3DY"
          controls
          playbackRate={1}
          width="700px"
          height="400px"

          /* controls = Display native player controls 
            playbackRate = Set the playback rate of the player
            width = Set the width of the player
            height = Set the height of the player*/
        />
      </div>
    </div>
  );
}

export default Hero;
