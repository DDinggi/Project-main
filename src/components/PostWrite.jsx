import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/css/PostWrite.css";

const PostWrite = ({ type, onWriteComplete }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
          "http://localhost:5000/api/posts",
          { title, content, type },
          { headers: { "Content-Type": "application/json" } }
      );

      alert(response.data.message);  // 성공 메시지 알림

      if (response.data.success) {
        onWriteComplete();  // 글 작성이 완료되면 글 목록 보기로 전환
      }
    } catch (error) {
      alert("글 작성 중 오류가 발생했습니다.");
    }
  };

  return (
      <div className="post-write-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>제목</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
          </div>
          <div>
            <label>내용</label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
          </div>
          <button type="submit">글쓰기</button>
        </form>
      </div>
  );
};

export default PostWrite;
