// src/hooks/useFetchExperience.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Error } from '../../types/Error';
import { Startup } from '../../types/Startup';

const fetchStartup = async (ownerId: string): Promise<Startup[]> => {
    let url = process.env.REACT_APP_URL;
    // find all startups from user with OwnerId van startup = UUID van user
    const response = await axios.get<Startup[]>(`${url}/startup/findall/${ownerId}`);
    return response.data;
};

export const useFetchStartup = (ownerId: string) => {
    const { data, status, error } = useQuery<Startup[], Error>(
       {
            queryKey: ['startups', ownerId],
            queryFn: () => fetchStartup(ownerId)
       }   
    );

    return {
        startups: data,
        starupStatus: status,
        error
    };
};
