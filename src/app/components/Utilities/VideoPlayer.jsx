"use client";
import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "300",
    height: "250",
  };
  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const Player = () => {
    return (
      <div className="fixed bottom-5 right-2 ">
        <button
          onClick={handleVideoPlayer}
          className="bg-color-secondary mb-2 w-10 float-right hover:text-color-accent font-medium text-lg"
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
       
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };
  const OpenTrailer = () => {
    return (
      <button onClick={handleVideoPlayer} className="fixed bottom-10 right-5 font-bold text-xl bg-color-secondary hover:text-color-accent rounded p-3">Lihat Trailer</button>
    )
  }
  return isOpen ? <Player /> : <OpenTrailer/>;
};
export default VideoPlayer;
