import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import PostWrite from "../components/PostWrite";

const ReviewPerform = () => {
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
            <h1>공연 리뷰</h1>
            {isWriting ? (
                <PostWrite type={3} onWriteComplete={handleWriteComplete} />
            ) : (
                <PostList type={3} onWriteButtonClick={handleWriteButtonClick} />
            )}
            <Footer />
        </div>
    );
};

export default ReviewPerform;
