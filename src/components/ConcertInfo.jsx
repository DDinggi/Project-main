import React, { useState, useEffect } from "react";
import ConcertDetail from "./ConcertDetail";
import events from "./Data";
import "../assets/css/ConcertList.css";

function ConcertInfo() {
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleDetailsClick = (id) => {
    setSelectedEventId(id);
  };

  const handleCloseModal = () => {
    setSelectedEventId(null);
  };

  // 스크롤 방지
  useEffect(() => {
    if (selectedEventId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEventId]);

  // 등록된 공연 없을 시
  if (events.length === 0) {
    return (
      <div className="list-container">
        <h2>전체 공연 목록</h2>
        <p>등록된 공연이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h2>전체 공연 목록</h2>
      <div className="list">
        {events.map((event) => (
          <div key={event.id} className="card">
            <img src={event.imageUrl} alt="대표 이미지 준비 중" />
            <div className="card-info">
              <h3>{event.title}</h3>
              <p>공연일시 : {event.date}</p>
              <p>공연장소 : {event.place}</p>
            </div>
            <div className="card-button">
              <button onClick={() => handleDetailsClick(event.id)}>
                자세히 보기
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedEventId && (
        <ConcertDetail eventId={selectedEventId} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default ConcertInfo;
