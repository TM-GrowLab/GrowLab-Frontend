import React, { useState } from 'react';

interface CreatePostInClassProps {
    cUUID: string;
}

const CreatePostInClass: React.FC<CreatePostInClassProps> = (
    cUUID
) => {
    const url = process.env.REACT_APP_URL;

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

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
            
            const response = await fetch(`${url}/coach-class/${cUUID.cUUID}/post`, {
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
        <>
        <button className='createBtn' onClick={toggleModal}>Create Post</button>

        {modal && 
            <div className="modal">
                <div className="overlay flexCenter">
                    <div className='createPost narrowMainBox column boxShadow'>
                        <form >
                            <div className='column screen'>
                                <label htmlFor="title">Title:</label>
                                <input className='titleBox' type="text" id="title" value={title} onChange={handleTitleChange} />
                            </div>
                            
                            <div className='column screen'>
                                <label htmlFor="content">Content:</label>
                                <textarea className='contentBox' id="content" value={content} onChange={handleContentChange} />
                            </div>

                            <div className="buttons flexCenter">
                                <button className='submit' onClick={handlePost} >Post</button>
                                <button className='cancelBtn' onClick={toggleModal}>Annuleren</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default CreatePostInClass;