import React, { useRef } from "react";
import video from "./video.mp4"

const Video = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <div className="grid-btn">
        <button onClick={handlePlay}>
          Play
        </button>
        <button onClick={handlePause}>
          Pause
        </button>
      </div>
      <video width="520" height="240" ref={videoRef}>
        <source src={video}/>
      </video>
    </>
  );
};

export default Video;


// function Video() {
//     const playerRef = useRef(null);
//     return (
//        <div>
//           <ReactPlayer ref={playerRef} url={video} controls={true} />
//        </div>
//     )
