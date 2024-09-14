import React from "react";

const Footer = (props) => {
  return (
    <footer id="footerType" className={`footer__wrap ${props.element}`}>
      <h2 className="blind">푸터 영역</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
          <div></div>
          <div>
            <h3>사이트</h3>
            <ul>
              <li>
                <a href="/">인디스트릿</a>
              </li>
              <li>
                <a href="/">인스타그램</a>
              </li>
              <li>
                <a href="/">공연영상</a>
              </li>
              <li>
                <a href="/">현장예매</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>소통 마당</h3>
            <ul>
              <li>
                <a href="/">인디토크</a>
              </li>
              <li>
                <a href="/">공연 후기</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>공연장</h3>
            <ul>
              <li>
                <a href="/">공연 정보</a>
              </li>
              <li>
                <a href="/">공연 홍보</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>마이 페이지</h3>
            <ul>
              <li>
                <a href="/mypage">마이페이지</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          2024 Gig-Vibe.
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
