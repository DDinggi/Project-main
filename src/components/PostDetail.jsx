import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";  // axios 임포트 추가
import "../assets/css/PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();  // URL 파라미터에서 게시물 ID 가져옴
  const navigate = useNavigate();
  const [post, setPost] = useState(null);  // 게시물 데이터 상태
  const [error, setError] = useState(null);  // 오류 메시지 상태

  // 컴포넌트가 마운트될 때 또는 id가 변경될 때마다 호출
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);  // 백엔드 API 호출
        if (response.status === 200) {
          setPost(response.data.post);  // 성공적으로 게시물을 가져온 경우 상태 설정
        } else {
          setError("게시물을 불러오는 중 오류가 발생했습니다.");
        }
      } catch (error) {
        setError("게시물을 불러오는 중 오류가 발생했습니다.");  // 에러 발생 시 메시지 설정
      }
    };

    fetchPost();
  }, [id]);

  // 에러가 발생했을 때 화면에 에러 메시지 표시
  if (error) {
    return <div>{error}</div>;
  }

  // 게시물을 찾지 못한 경우 메시지 표시
  if (!post) {
    return <div>글을 찾을 수 없습니다.</div>;
  }

  // 게시물 상세 정보 렌더링
  return (
      <div className="post-detail-container">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>등록일: {post.date}</p>
        <p>조회수: {post.views}</p>
        <button onClick={() => navigate(-1)} className="back-btn">
          뒤로가기
        </button>
      </div>
  );
};

export default PostDetail;
