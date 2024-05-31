import { useQuery } from "@tanstack/react-query";

const fetchCommentsData = async (UUID: string) => {
    try {
        let url = process.env.REACT_APP_URL;
        const response = await fetch(
            `${url}/post/comments/${UUID}`, 
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

export const useFetchPostComments = (UUID: string) => {
    const { data, status, error } = useQuery<[], Error>(
       {
            queryKey: ['comments', UUID],
            queryFn: () => fetchCommentsData(UUID)
         }
    );

    return {
        comments: data,
        commentsStatus: status,
        commentsError: error
    };
}