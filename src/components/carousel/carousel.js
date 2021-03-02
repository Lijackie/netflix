import React, { useState } from "react";
import "./carousel.scss";
import { Row, Col, Popover, OverlayTrigger, Button } from "react-bootstrap";
import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, A11y]);

const images = [
  "images/ia_300000087.webp",
  "images/ia_300000088.jpg",
  "images/ia_300000089.webp",
  "images/ia_300000090.webp",
  "images/ia_300000091.webp",
  "images/ia_300000092.webp",
  "images/ia_300000093.jpg",
  "images/ia_300000095.jpg",
  "images/ia_300000098.webp",
  "images/ia_300000102.webp",
  "images/ia_300000103.webp",
  "images/ia_300000104.webp",
  "images/ia_300000105.webp",
  "images/ia_300000106.webp",
  "images/ia_300000107.webp",
  "images/ia_300000108.jpg",
];

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

const Carousel = ({ title }) => {
  return (
    <>
      <Row>
        <h1 className="ml-3 mt-3">{title}</h1>
      </Row>
      <Row className="carousel-container">
        <Col>
          <Swiper
            className="swiper mt-1"
            spaceBetween={0}
            navigation
            slidesPerView={3}
            slidesPerGroup={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
            breakpoints={{
              960: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 5,
              },
              720: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              540: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
          >
            {images.map((image) => (
              <SwiperSlide className="swiper-slide">
                <img className="img-fluid img-swiper" src={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </>
  );
};

export default Carousel;
