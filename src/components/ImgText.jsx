import React from "react";

const ImgText = (props) => {
  return (
    <section id="imgTextType" className={`imgText__wrap ${props.element}`}>
      <h2 className="blind">{props.title}</h2>
      <div className="imgText__inner container">
        <div className="imgText__txt">
          <span className="small"></span>
          <h3 className="title">유용한 사이트 살펴보기</h3>
          <p className="desc">뮤지션과 리스너들을 위한 사이트</p>
          <ul className="list">
            <li>
              <a href="https://indistreet.com/">인디스트릿</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">페이스북</a>
            </li>
            <li>
              <a href="https://www.naver.com">네이버</a>
            </li>
            <li>
              <a href="https://www.instagram.com">인스타그램</a>
            </li>
            <li>
              <a href="https://x.com">트위터</a>
            </li>
            <li>
              <a href="https://www.youtube.com/">Youtube 사이트</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">뮤지션 정보</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            공연장 정보
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImgText;
