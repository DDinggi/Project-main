import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Info from "./pages/Info";
import Find from "./pages/Find";
import Review from "./pages/Review";
import Promotion from "./pages/Promotion";
import Together from "./pages/Together";
import Talk from "./pages/Talk";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ConcertDetail from "./components/ConcertDetail";
import MyPage from "./pages/MyPage";
import TalkWrite from "./pages/TalkWrite";
import TalkDetail from "./components/PostDetail";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/info_perform" element={<Info />} />
          <Route path="/find_perform" element={<Find />} />
          <Route path="/review_perform" element={<Review />} />
          <Route path="/promote_perform" element={<Promotion />} />
          <Route path="/together" element={<Together />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/concertinfo/:id" element={<ConcertDetail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/talk/write" element={<TalkWrite />} />
          <Route path="/talk/:id" element={<TalkDetail />} />
        </Routes>
      </>
  );
}

export default App;
