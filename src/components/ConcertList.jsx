import React from "react";
import Slider from "react-slick";
import events from "./Data.js";
import "../assets/css/ConcertList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparents" }}
      onClick={onClick}
    />
  );
}

function ConcertList() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <div className="carousel">
      <h2>이주의 공연</h2>
      <div className="carousel-list">
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} className="box">
              <img src={event.imageUrl} alt="대표 이미지 준비 중" />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.place}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ConcertList;
