import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./background-video.scss";

const BackgroundVideo = () => {
  useEffect(() => {
    const video = document.getElementById("bgVideo");

    video.play();
    video.muted = false;
  }, []);

  const handleVideo = () => {
    const video = document.getElementById("bgVideo");
    if (video.paused) {
      video.play();
      video.muted = false;
    } else {
      video.pause();
    }
  };

  return (
    <div className="box">
      <video id="bgVideo" playsinline autoplay loop>
        <source src="ragnarok.mp4" type="video/mp4" />
      </video>
      <div className="viewport-content">
        <div>
          <h1 className="ml-60 pt-70v">仙境傳說 守護永恆的愛</h1>
        </div>
        <div className="flex">
          <button
            className="btn btn-primary btn-lg ml-60"
            onClick={handleVideo}
          >
            <FontAwesomeIcon className="mr-2" icon={faPlay} />
            播放
          </button>
          <button className="btn btn-light btn-lg ml-3">
            <FontAwesomeIcon className="mr-2" icon={faInfoCircle} />
            更多資訊
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
