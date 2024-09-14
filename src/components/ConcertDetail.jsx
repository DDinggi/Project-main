import React, { useState, useEffect } from "react";
import events from "./Data";
import "../assets/css/ConcertDetail.css";

function ConcertDetail({ eventId, onClose }) {
  const event = events.find((event) => event.id === eventId);

  // 닫기
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!event) {
    return <p>공연 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="detail-container">
          <div className="detail-img">
            <img src={event.imageUrl} alt={event.title} />
          </div>
          <div className="detail-info">
            <h2>{event.title}</h2>
            <p>
              <strong>공연일시 : </strong> {event.date}
            </p>
            <p>
              <strong>공연장소 : </strong> {event.place}
            </p>
            <a
              href={event.url}
              target="_blank"
              rel="noopener norefferer"
              className="view"
            >
              보러가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConcertDetail;
