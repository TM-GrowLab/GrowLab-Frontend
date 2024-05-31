import { useQuery } from "@tanstack/react-query";

const fetchPostsData = async (UUID:string) => {
    try {
        let url = process.env.REACT_APP_URL;
        const response = await fetch(
            `${url}/post/forCoachesByMember/${UUID}`, 
            {}
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error(error);
    }
};

export const useFetchPostsForCoachesByMember = (UUID: string) => {
    const { data, status, error } = useQuery<[], Error>(
       {
            queryKey: ['posts', UUID],
            queryFn: () => fetchPostsData(UUID)
         }
    );

    return {
        posts: data,
        postsStatus: status,
        postsError: error
    };
}