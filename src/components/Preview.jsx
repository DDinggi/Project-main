import React from "react";
import { NavLink } from "react-router-dom";
import PostList from "./PrePostList";

const Preview = (props) => {
  return (
    <section id="imageType" className={`imageType__wrap ${props.element}`}>
      <div className="image__inner container">
        <div>
          <h3 className="image__title">인디토크</h3>
          <p className="image__desc">
            <PostList />
          </p>
          <NavLink className="image__btn" to="/talk">
            자세히 보기
          </NavLink>
        </div>
        <div>
          <h3 className="image__title">같이봐요</h3>
          <p className="image__desc">
            <PostList />
          </p>
          <NavLink className="image__btn yellow" to="/together">
            자세히 보기
          </NavLink>
        </div>
      </div>
      <div className="image__inner container">
        <div>
          <h3 className="image__title">공연후기</h3>
          <p className="image__desc">
            <PostList />
          </p>
          <NavLink className="image__btn skyblue" to="/review_perform">
            자세히 보기
          </NavLink>
        </div>
        <div>
          <h3 className="image__title">공연홍보</h3>
          <p className="image__desc">
            <PostList />
          </p>
          <NavLink className="image__btn grey" to="/promote_perform">
            자세히 보기
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Preview;

{
  /* <section id="imageType" className={`imageType__wrap ${props.element}`}>
<div className="image__inner container">
  <post className="image img1">
    <h3 className="image__title">인디토크</h3>
    <p className="image__desc">
      <PostList />
    </p>
    <NavLink className="image__btn" to="/talk">
      자세히 보기
    </NavLink>
  </post>
  <post className="image img2">
    <h3 className="image__title">같이봐요</h3>
    <p className="image__desc">
      <PostList />
    </p>
    <NavLink className="image__btn yellow" to="/together">
      자세히 보기
    </NavLink>
  </post>
</div>
<div className="image__inner container">
  <post className="image img1">
    <h3 className="image__title">공연후기</h3>
    <p className="image__desc">
      <PostList />
    </p>
    <NavLink className="image__btn skyblue" to="/review_perform">
      자세히 보기
    </NavLink>
  </post>
  <post className="image img2">
    <h3 className="image__title">공연홍보</h3>
    <p className="image__desc">
      <PostList />
    </p>
    <NavLink className="image__btn grey" to="/promote_perform">
      자세히 보기
    </NavLink>
  </post>
</div>
</section> */
}
