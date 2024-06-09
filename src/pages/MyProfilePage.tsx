import React from 'react';
import { NavBar } from '../components/NavBar';
import UserTestData from '../components/Profile/UserProfileCard';

interface MyProfilePageProps {
    // Add any props here
}

export const MyProfilePage: React.FC<MyProfilePageProps> = () => {
    return (
        <>
         <UserTestData />
            
        </>
    );
};

export default MyProfilePage ;