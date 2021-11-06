import React from "react";
import ReactPlayer from "react-player";
function Footer() {
  return (
    <div>
      <p>this is the footer </p>
      <div className="px-20 py-10">
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
      </div>
    </div>
  );
}

export default Footer;
