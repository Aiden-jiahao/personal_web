import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
function about() {
  return (
    <div>
      <Header />

      <div className="flex grid-cols-2 gap-20 justify-center ">
        <div className="transform hover:scale-110 transition duration-200 ">
          <ReactPlayer
            url="https://youtu.be/Jk0MiqpwZoU"
            controls
            playbackRate={1}
            width="500px"
            height="300px"
          />
        </div>

        <div className="  transform hover:scale-110 transition duration-200 ease-out object-cover">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=SJRgJbGr3DY"
            controls
            playbackRate={1}
            width="500px"
            height="300px"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default about;
