import { useQuery } from "@tanstack/react-query";
import { Post } from "../../types/Post";

const fetchPostData = async (UUID: string) => {
    try {
        let url = process.env.REACT_APP_URL;
        const response = await fetch(
            `${url}/post/${UUID}`, 
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

export const useFetchPost = (UUID: string) => {
    const { data, status, error } = useQuery<Post, Error>(
       {
            queryKey: ['post', UUID],
            queryFn: () => fetchPostData(UUID)
         }
    );

    return {
        post: data,
        postStatus: status,
        postError: error
    };
}