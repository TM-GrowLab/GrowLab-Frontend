import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import UserTestData from '../components/Profile/UserProfileCard';
import { Profile } from '../components/Profile/Profile';
import { useParams } from 'react-router-dom';

interface UserPageProps {
    // Add any props here
}

export const UserPage: React.FC<UserPageProps> = () => {
    const { userUUID } = useParams<{ userUUID: string }>();

    
    useEffect(() => {
    }, []);

    return (
        <>
            <NavBar />
            <Profile 
                UUID={userUUID || ''} 
            />
        </>
    );
};
