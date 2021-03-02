import React from "react";
import "./carousel.scss";
import { Row, Col } from "react-bootstrap";

import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, A11y]);

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
                spaceBetween: 5
              },
              720: {
                slidesPerView: 5,
                slidesPerGroup: 5
              },
              540: {
                slidesPerView: 4,
                slidesPerGroup: 4
              },
            }}
          >
            <SwiperSlide className="swiper-slide ">
              <img className="img-fluid" src="images/ia_300000087.webp" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <img className="img-fluid" src="images/ia_300000088.jpg" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <img className="img-fluid" src="images/ia_300000089.webp" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <img className="img-fluid" src="images/ia_300000090.webp" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <img className="img-fluid" src="images/ia_300000091.webp" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <img className="img-fluid" className="img-fluid" src="images/ia_300000092.webp" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <img className="img-fluid" src="images/ia_300000093.jpg" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <img className="img-fluid" src="images/ia_300000095.jpg" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <img className="img-fluid" src="images/ia_300000098.webp" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide ">
              <img className="img-fluid" src="images/ia_300000102.webp" />
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </>
  );
};

export default Carousel;
