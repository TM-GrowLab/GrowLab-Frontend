import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../../types/User';
import { Error } from '../../types/Error';

const fetchUsers = async (): Promise<User[]> => {
    let url = process.env.REACT_APP_URL;
    const response = await axios.get<User[]>(`${url}/user`);
    return response.data;
};

export const useFetchUsers = () => {
    const { data, status, error } = useQuery<User[], Error>({
        queryKey: ['users'], // Add the queryKey property
        queryFn: fetchUsers 
    });

    return {
        users: data,
        usersStatus: status,
        error
    };
};
