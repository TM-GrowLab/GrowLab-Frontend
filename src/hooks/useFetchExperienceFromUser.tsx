// src/hooks/useFetchExperience.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Experience } from '../types/Experience';
import { Error } from '../types/Error';

const fetchExperience = async (UUID: string): Promise<Experience[]> => {
    const response = await axios.get<Experience[]>(`http://localhost:3000/experience/findall/${UUID}`);
    return response.data;
};

export const useFetchExperience = (UUID: string) => {
    const { data, status, error } = useQuery<Experience[], Error>(
       {
            queryKey: ['experiences', UUID],
            queryFn: () => fetchExperience(UUID)
       }   
    );

    return {
        experiences: data,
        experienceStatus: status,
        error
    };
};
