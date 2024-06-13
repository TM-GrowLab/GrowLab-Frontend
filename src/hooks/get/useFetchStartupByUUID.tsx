import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Startup } from '../../types/Startup';
import { Error } from '../../types/Error';

const fetchStartupByUUID = async (UUID: string): Promise<Startup> => {
    let url = process.env.REACT_APP_URL;
    const response = await axios.get<Startup>(`${url}/startup/${UUID}`);
    return response.data;
};

export const useFetchStartupByUUID = (UUID: string) => {
    const { data, status, error } = useQuery<Startup, Error>({
        queryKey: ['startup', UUID], // Add the queryKey property
        queryFn: () => fetchStartupByUUID(UUID)
    });

    return {
        startup: data,
        startupStatus: status,
        error
    };
};
