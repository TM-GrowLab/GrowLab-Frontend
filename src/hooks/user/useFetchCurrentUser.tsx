import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../../types/User';
import { Error } from '../../types/Error';

const fetchCurrentUser = async (UUID: string): Promise<User> => {
    const URL = process.env.REACT_APP_URL;
    const response = await axios.get<User>(`${URL}/user/${UUID}`);
    return response.data;
};

export const useFetchCurrentUser = (UUID: string) => {
    const { data, status, error } = useQuery<User, Error>(
       {
            queryKey: ['currentUser', UUID],
            queryFn: () => fetchCurrentUser(UUID)
       }   
    );

    return {
        currentUser: data,
        currentUserStatus: status,
        error
    };
};
