import React from "react";
import Preview from "./Preview";
import ConcertList from "./ConcertList";
// import PostList from "./PostList";

const Main = () => {
  return (
    <main id="main" role="main">
      <ConcertList element="nexon" />
      <Preview element="section nexon" />
    </main>
  );
};

export default Main;
