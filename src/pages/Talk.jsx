import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import PostWrite from "../components/PostWrite";

const Talk = () => {
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
            <h1>인디토크</h1>
            {isWriting ? (
                <PostWrite type={1} onWriteComplete={handleWriteComplete} />
            ) : (
                <PostList type={1} onWriteButtonClick={handleWriteButtonClick} />
            )}
            <Footer />
        </div>
    );
};

export default Talk;
