import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../types/User';
import { Error } from '../types/Error';

const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>('http://localhost:3000/user');
    return response.data;
};

export const useFetchUsers = () => {
    const { data, status, error } = useQuery<User[], Error>({
        queryKey: ['users'], // Add the queryKey property
        queryFn: fetchUsers // Add the queryFn property
    });

    return {
        users: data,
        usersStatus: status,
        error
    };
};
