import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header id="headerType" className={`header__wrap ${props.element}`}>
      <div className="header__inner">
        <div className="header__logo">
          <NavLink to="/">Gig-Vibe</NavLink>
        </div>
        <nav className="header__menu">
          <ul>
            <li>
              <NavLink to="/talk">인디토크</NavLink>
            </li>
            <li>
              <NavLink to="/together">같이봐요</NavLink>
            </li>
            <li>
              <NavLink to="/info_perform">공연 정보</NavLink>
            </li>
            <li>
              <NavLink to="/review_perform">공연 후기</NavLink>
            </li>
            <li>
              <NavLink to="/promote_perform">공연 홍보</NavLink>
            </li>
            <li>{/* <NavLink to="/intro">소개</NavLink> */}</li>
          </ul>
        </nav>
        <div className="header__member">
          <NavLink to="/mypage">마이페이지</NavLink>
          <NavLink to="/login">로그인</NavLink>
          <NavLink to="/signup">회원가입</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
