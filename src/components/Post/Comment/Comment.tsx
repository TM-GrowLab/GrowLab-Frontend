import React from 'react';

interface CommentProps {
    author: string;
    content: string;
}

const Comment: React.FC<CommentProps> = ({ author, content }) => {
    return (
        <div className="comment">
            <div className="photo">
                <img src="" alt="profile picture" />
            </div>
            <div className="content">
                <h4>{author}</h4>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Comment;