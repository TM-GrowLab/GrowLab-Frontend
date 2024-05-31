import React, { useState } from 'react';

const CreatePost: React.FC = () => {
    const url = process.env.REACT_APP_URL;


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handlePost = async () => {
        try {
            const token = localStorage.getItem('token');
            const postTitle = (document.querySelector('.titleBox') as HTMLInputElement)?.value;
            const postContent = (document.querySelector('.contentBox') as HTMLInputElement)?.value;
            
            const response = await fetch(`${url}/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    visibility: 'public',
                    title: postTitle,
                    content: postContent,
                    type: 'text'
                })
            });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='createPost center column narrowMainBox'>
            <h2>Create new post</h2>

            <div className='flexStart column screen'>
                <label htmlFor="title">Title:</label>
                <input className='titleBox screen' type="text" id="title" value={title} onChange={handleTitleChange} />
            </div>
            
            <div className='flexStart column screen'>
                <label htmlFor="content">Content:</label>
                <textarea className='contentBox screen' id="content" value={content} onChange={handleContentChange} />
            </div>

            <button onClick={handlePost}>Post</button>
        </div>
    );
};

export default CreatePost;