import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
function about() {
  return (
    <div>
      <Header />
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
        />
      </div>
      <Footer />
    </div>
  );
}

export default about;
