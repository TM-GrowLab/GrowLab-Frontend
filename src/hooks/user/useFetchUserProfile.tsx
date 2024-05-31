import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { UserProfile } from '../../types/UserProfile';

const fetchUserProfile = async (): Promise<UserProfile> => {
    const url = process.env.REACT_APP_URL;
    const token = localStorage.getItem('token');
    const response = await axios.get<UserProfile>(`${url}/auth/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const useFetchUserProfile = () => {
    const { data, status, error } = useQuery<UserProfile, Error> ({
        queryKey: ['userProfile'],
        queryFn: fetchUserProfile
    });
    
    return {
        userProfile: data,
        userProfileStatus: status,
        userProfileError: error
    };
};
