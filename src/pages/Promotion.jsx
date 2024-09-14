import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import PostWrite from "../components/PostWrite";

const Promotion = () => {
    const [isWriting, setIsWriting] = useState(false);

    const handleWriteButtonClick = () => {
        setIsWriting(true);
    };


    const handleWriteComplete = () => {
        setIsWriting(false);
    };

    return (
        <div>
            <Header />
            <h1>공연 홍보</h1>
            {isWriting ? (
                <PostWrite type={4} onWriteComplete={handleWriteComplete} />
            ) : (
                <PostList type={4} onWriteButtonClick={handleWriteButtonClick} />
            )}
            <Footer />
        </div>
    );
};

export default Promotion;
