import React, { useState } from "react";
import "../assets/css/MyPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyPage() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="title">마이페이지</h1>

        <div className="profile-container">
          {profileImage ? (
            <img
              src={profileImage}
              alt="프로필 이미지"
              className="profile-image"
            />
          ) : (
            <div className="default-profile-image">200x200</div>
          )}
          <input
            type="file"
            id="profileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            onClick={() => document.getElementById("profileInput").click()}
          >
            사진 변경하기
          </button>
        </div>

        <div className="info-container">
          <p>이름 : 정상훈</p>
          <p>닉네임 : 주4일제</p>
          <button>내가 작성한 글 바로가기</button>
          <button>나의 관심 공연 바로가기</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPage;
