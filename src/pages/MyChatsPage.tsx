import React, { useEffect, useState, useRef } from 'react';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';
import { useFetchCurrentUser } from '../hooks/user/useFetchCurrentUser';
import MiniConnectionCard from '../components/Connecties/MiniConnectionCard';
import { useFetchChat } from '../hooks/chat/useFetchChat';

export const MyChatsPage: React.FC = () => {
    const [sendingMessage, setSendingMessage] = useState(false);

    const [selectedChatUserId, setSelectedChatUserId] = useState('');

    const { userProfile, userProfileStatus, userProfileError } = useFetchUserProfile();
    const UUIDCurrentUser = userProfile?.sub ?? '';
    const { currentUser, currentUserStatus, error } = useFetchCurrentUser(UUIDCurrentUser);

    const { chat, chatStatus, chatError } = useFetchChat(UUIDCurrentUser, selectedChatUserId);

    const [inputValue, setInputValue] = useState('');
    const chatlogRef = useRef<HTMLDivElement>(null);

    // Function to handle selecting a chat
    const handleSelectChat = (id: string) => {
        setSelectedChatUserId(id);
    };

    const handleSendMessage = async (chatId: string, message: string, senderId: string) => {
        setSendingMessage(true);
    
        const URL = process.env.REACT_APP_URL;
        const response = await fetch(`${URL}/chat/addMessage/${chatId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
            },
            body: JSON.stringify({
                chat: chatId,
                sender: senderId,
                content: message,
                type: 'text',
            }),
        });
    
        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        setInputValue('');
        setSendingMessage(false);
    };
    
    useEffect(() => {
        if (selectedChatUserId) {
            console.log(selectedChatUserId);
        }
        if (chatlogRef.current) {
            chatlogRef.current.scrollTop = chatlogRef.current.scrollHeight;
        }
        
        console.log('update');
    }, [selectedChatUserId, chat?.messages, sendingMessage]);
    return (
        <div className="center">
            <div className="my-chats-page">
                <div className="connections-list column">
                    {currentUser?.connectionsStarters && currentUser?.connectionsStarters.split(",").filter(Boolean).map((connectieUUID: string, index: number) => (
                        <div onClick={() => handleSelectChat(connectieUUID)} key={index}>
                            <div style={{ pointerEvents: 'none' }}>
                                <MiniConnectionCard 
                                key={index} 
                                connectionUUID={connectieUUID} 
                                currentUserUUID={UUIDCurrentUser} 
                                />
                            </div>
                        </div>
                    ))}  
                </div>
                <div className="selected-chat">
                    <div className="topBar">
                    </div>
                    <div className="chatlog" ref={chatlogRef}>
                        {chat?.messages && chat?.messages.map((message: any, index: number) => (
                            <div key={index} className={`message ${message.sender === selectedChatUserId ? 'received' : ''}`}>
                                <p>{message.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input className='inputChat' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        <button onClick={() => handleSendMessage(chat?.UUID || '', inputValue, UUIDCurrentUser)}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyChatsPage;