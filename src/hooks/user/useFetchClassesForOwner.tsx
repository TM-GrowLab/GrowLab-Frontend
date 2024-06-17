import { useQuery } from "@tanstack/react-query";

const fetchClassDataForOwner = async (UUID: string) => {
    try {
        let url = process.env.REACT_APP_URL;
        const response = await fetch(
            `${url}/coach-class/forOwner/${UUID}`, 
            {}
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const classes = await response.json();
        return classes
    } catch (error) {
        console.error(error);
    }
};



export const useFetchClassDataForOwner = (UUID: string) => {
    const { data, status, error } = useQuery<[], Error>(
       {
            queryKey: ['coach-class', UUID],
            queryFn: () => fetchClassDataForOwner(UUID)
       }   
    );

    return {
        classData: data,
        classStatus: status,
        classError: error
    };
};