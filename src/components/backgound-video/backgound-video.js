import React, { useEffect } from "react";
import { Row, Button } from "react-bootstrap";
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
    <>
      <video id="bgVideo" playsinline autoplay loop>
        <source src="ragnarok.mp4" type="video/mp4" />
      </video>
      <div className="viewport-content">
        <Row>
          <h1 className="ml-60 pt-70v">仙境傳說 守護永恆的愛</h1>
        </Row>
        <Row className="flex">
          <Button
            className="ml-60"
            size="lg"
            onClick={handleVideo}
            variant="primary"
          >
            <FontAwesomeIcon className="mr-2" icon={faPlay} />
            播放
          </Button>
          <Button className="ml-3" size="lg" variant="light">
            <FontAwesomeIcon className="mr-2" icon={faInfoCircle} />
            更多資訊
          </Button>
        </Row>
      </div>
    </>
  );
};

export default BackgroundVideo;
