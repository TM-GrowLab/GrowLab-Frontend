import { useQuery } from "@tanstack/react-query";

const fetchUserData = async (UUID: string) => {
    try {
        let url = process.env.REACT_APP_URL;
        const response = await fetch(
            `${url}/user/${UUID}`, 
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

export const useFetchUser = (UUID: string) => {
    const { data, status, error } = useQuery<[], Error>(
       {
            queryKey: ['user', UUID],
            queryFn: () => fetchUserData(UUID)
         }
    );

    return {
        user: data,
        userStatus: status,
        userError: error
    };
}