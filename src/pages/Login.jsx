import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Login.css";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h1 className="login-title">Gig-Vibe</h1>
        <div className="login-box">
          <input type="text" placeholder="아이디" className="input-field" />
          <input
            type="password"
            placeholder="비밀번호"
            className="input-field"
          />
          <button className="login-button">로그인</button>
          <div className="additional-options">
            <button className="forgot-password">비밀번호 찾기</button>
            <button className="signup" onClick={handleSignUpClick}>
              회원가입
            </button>
          </div>
        </div>
      </div>
      <Footer element="nexon section gray" />
    </div>
  );
};

export default Login;
