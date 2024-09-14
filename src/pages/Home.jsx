import React from "react";
//import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer element="nexon section gray" />
    </div>
  );
};

export default Home;
