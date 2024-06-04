import React, { useState } from 'react';

interface CreateSessionInClassProps {
    cUUID: string;
}

const CreateSessionInClass: React.FC<CreateSessionInClassProps> = (
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

    const handleSession = async () => {
        try {
            const token = localStorage.getItem('token');
            const sessionTitle = (document.querySelector('.titleBox') as HTMLInputElement)?.value;
            const sessionContent = (document.querySelector('.contentBox') as HTMLInputElement)?.value;
            const sessionDateTime = (document.querySelector('.dateTime') as HTMLInputElement)?.value;
            
            const response = await fetch(`${url}/coach-class/${cUUID.cUUID}/session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: sessionTitle,
                    description: sessionContent,
                    date: new Date(sessionDateTime).toISOString()
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
        <button className='createBtn' onClick={toggleModal}>Create Session</button>

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
                                <label htmlFor="content">Description:</label>
                                <textarea className='contentBox' id="content" value={content} onChange={handleContentChange} />
                            </div>

                            <div className='column screen'>
                                <label htmlFor="dateTime">Date time:</label>
                                <input aria-label="Date and time" type="datetime-local" className='dateTime'/>
                            </div>

                            <div className="buttons flexCenter">
                                <button className='submit' onClick={handleSession} >Session</button>
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

export default CreateSessionInClass;