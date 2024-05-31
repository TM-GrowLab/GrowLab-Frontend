// src/hooks/useFetchExperience.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../types/User';
import { Error } from '../types/Error';

const fetchUser = async (UUID: string): Promise<User> => {
    const response = await axios.get<User>(`http://localhost:3000/user/${UUID}`);
    return response.data;
};

export const useFetchUser = (UUID: string) => {
    const { data, status, error } = useQuery<User, Error>(
       {
            queryKey: ['currentUser', UUID],
            queryFn: () => fetchUser(UUID)
       }   
    );

    return {
        currentUser: data,
        currentUserStatus: status,
        error
    };
};
