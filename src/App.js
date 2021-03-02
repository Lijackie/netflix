import React, { useEffect } from "react";
import "./App.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import Header from "./components/header/header";
import Carousel from "./components/carousel/carousel";

function App() {
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
    <div>
      <Header />
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
          <Button className="ml-3" size="lg" variant="primary">
            <FontAwesomeIcon className="mr-2" icon={faInfoCircle} />
            更多資訊
          </Button>
        </Row>
      </div>
      <Container fluid>
        <Carousel title="熱門選擇" />
        <Carousel title="現正熱播" />
        <Carousel title="喜劇節目" />
        <Carousel title="最新節目" />
      </Container>
    </div>
  );
}

export default App;
