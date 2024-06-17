import { useEffect } from 'react';

const useSendMessage = (chatId: string, message: string, senderId: string) => {
    useEffect(() => {
        const sendMessage = async () => {
            try {
                const URL = process.env.REACT_APP_URL;
                const response = await fetch(`${URL}/chat/addMessage/${senderId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
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

                // Handle successful response here
            } catch (error) {
                // Handle error here
            }
        };

        sendMessage();
    }, [message, senderId]);
};

export default useSendMessage;