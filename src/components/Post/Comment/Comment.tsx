import React from 'react';

interface CommentProps {
    author: string;
    content: string;
    photo: string;
}

export const Comment: React.FC<CommentProps> = (
    { 
        author, 
        content,
        photo
    }) => {
    return (
        <div className="postComment flexStart">
            <img src={photo} className='tinyImage' alt="profile picture" />
            <div className="content">
                <p className='elza_b'>{author}</p>
                <p className='elza_p'>{content}</p>
            </div>
        </div>
    );
};

export default Comment;
