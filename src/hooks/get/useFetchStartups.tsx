import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Startup } from '../../types/Startup';
import { Error } from '../../types/Error';

const fetchStartups = async (): Promise<Startup[]> => {
    let url = process.env.REACT_APP_URL;
    const response = await axios.get<Startup[]>(`${url}/startup`);
    return response.data;
};

export const useFetchStartups = () => {
    const { data, status, error } = useQuery<Startup[], Error>({
        queryKey: ['startup'], // Add the queryKey property
        queryFn: fetchStartups 
    });

    return {
        startups: data,
        startupsStatus: status,
        error
    };
};
