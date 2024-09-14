import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/css/PostList.css";
import "../assets/css/Pagination.css";
import Pagination from "react-js-pagination";

const PostList = ({ type, onWriteButtonClick }) => {
  const [posts, setPosts] = useState([]);  // 글 목록 상태
  const [page, setPage] = useState(1);  // 현재 페이지
  const [loading, setLoading] = useState(true);  // 로딩 상태
  const [error, setError] = useState(null);  // 오류 상태
  const navigate = useNavigate();
  const postsPerPage = 10;  // 페이지당 글 개수

  // 게시물 목록을 가져오는 함수
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/api/posts?type=${type}`);
        if (response.status === 200) {
          setPosts(response.data.posts);  // API 호출 성공 시 글 목록 설정
        } else {
          setError("게시글을 불러오는 중 오류가 발생했습니다.");
        }
      } catch (error) {
        setError("게시글을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [type]);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  // 현재 페이지에 해당하는 게시물 목록 계산
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 게시물 클릭 핸들러
  const handlePostClick = (id) => {
    navigate(`/talk/${id}`);  // 게시물 상세 페이지로 이동
  };

  // 로딩 중
  if (loading) return <p>로딩 중...</p>;

  // 오류 발생
  if (error) return <p>{error}</p>;

  // 게시물이 없을 때
  if (posts.length === 0) return <p>게시글이 없습니다.</p>;

  return (
      <div className="post-table-container">
        <div className="post-table">
          <table>
            <thead>
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
            </thead>
            <tbody>
            {currentPosts.map((post) => (
                <tr key={post.id} onClick={() => handlePostClick(post.id)}>
                  <td>{post.number}</td>  {/* 각 게시물의 글번호 표시 */}
                  <td>{post.title}</td>
                  <td>{new Date(post.date).toLocaleString()}</td>
                  <td>{post.views}</td>
                </tr>
            ))}
            </tbody>
          </table>

          <div className="pagination">
            <Pagination
                activePage={page}
                itemsCountPerPage={postsPerPage}
                totalItemsCount={posts.length}
                pageRangeDisplayed={5}
                prevPageText={"<"}
                nextPageText={">"}
                onChange={handlePageChange}
            />
          </div>

          <div className="btn-container">
            <button className="write-btn" onClick={onWriteButtonClick}>
              글쓰기
            </button>
          </div>
        </div>
      </div>
  );
};

export default PostList;
