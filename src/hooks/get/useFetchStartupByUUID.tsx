import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Startup } from '../../types/Startup';
import { Error } from '../../types/Error';

const fetchStartups = async (UUID: string): Promise<Startup[]> => {
    let url = process.env.REACT_APP_URL;
    const response = await axios.get<Startup[]>(`${url}/startup/${UUID}`);
    return response.data;
};

export const useFetchStartups = (UUID: string) => {
    const { data, status, error } = useQuery<Startup[], Error>({
        queryKey: ['startup', UUID], // Add the queryKey property
        queryFn: () => fetchStartups(UUID)
    });

    return {
        startups: data,
        startupsStatus: status,
        error
    };
};
