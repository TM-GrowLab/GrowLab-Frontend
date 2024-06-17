import { useQuery } from "@tanstack/react-query";
import { Post } from "../../types/Post";
import { Chat } from "../../types/Chat";

const fetchChatData = async (UUID1: string, UUID2: string) => {
    try {
        let url = process.env.REACT_APP_URL;
        const response = await fetch(
            `${url}/chat/findChat/${UUID1}/${UUID2}`, 
            {}
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error(error);
    }
};

export const useFetchChat = (UUID1: string, UUID2: string) => {
    const { data, status, error } = useQuery<Chat, Error>(
       {
            queryKey: ['chat', UUID1, UUID2],
            queryFn: () => fetchChatData(UUID1, UUID2)
         }
    );

    return {
        chat: data,
        chatStatus: status,
        chatError: error
    };
}