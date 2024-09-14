import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import PostWrite from "../components/PostWrite";

const Together = () => {
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
            <h1>같이봐요</h1>
            {isWriting ? (
                <PostWrite type={2} onWriteComplete={handleWriteComplete} />
            ) : (
                <PostList type={2} onWriteButtonClick={handleWriteButtonClick} />
            )}
            <Footer />
        </div>
    );
};

export default Together;
