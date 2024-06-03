import { useQuery } from "@tanstack/react-query";
import { CoachClass } from "../types/Class";

async function fetchClass(idClass: any): Promise<any> {
    try {
        let token = localStorage.getItem('token');
        let url = process.env.REACT_APP_URL;
        const response = await fetch(
            `${url}/coach-class/${idClass}`, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const useFetchClass = (idClass: string) => {
    const { data, status, error } = useQuery<CoachClass, Error>(
       {
            queryKey: ['coachClass', idClass],
            queryFn: () => fetchClass(idClass)
       }   
    );

    return {
        coachClass: data,
        coachClassStatus: status,
        error
    };
};