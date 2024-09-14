import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostWrite from "../components/PostWrite";

const TalkWrite = ({ onAddPost }) => {
  const navigate = useNavigate();

  const handlePostSubmit = (title, content) => {
    onAddPost(title, content);
    navigate("/talk");
  };

  return (
    <div>
      <Header />
      <PostWrite onAddPost={handlePostSubmit} />
      <Footer />
    </div>
  );
};

export default TalkWrite;
