import React, { useEffect } from "react";
import "./App.scss";
import { Container, Row, Button } from "react-bootstrap";

import Header from "./components/header/header";
import BackgroundVideo from "./components/backgound-video/backgound-video";
import Carousel from "./components/carousel/carousel";

function App() {
  return (
    <div>
      <Header />
      <BackgroundVideo />
      
      <Carousel title="熱門選擇" />
      <Carousel title="現正熱播" />
      <Carousel title="喜劇節目" />
      <Carousel title="最新節目" />
    </div>
  );
}

export default App;
