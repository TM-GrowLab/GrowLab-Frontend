import React from 'react';
import { Footer } from '../components/Footer';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';
import { useFetchUser } from '../hooks/user/useFetchUser';
import { useState } from 'react';

interface MyConnectionsProps {
    // Add any props here
}

export const MyConnectionsPage: React.FC<MyConnectionsProps> = () => {

    const { userProfile, userProfileStatus, userProfileError } = useFetchUserProfile();
    const UUIDCurrentUser = userProfile?.sub ?? '';
    const { user, userStatus, userError } = useFetchUser(UUIDCurrentUser);
   




    return (
        <>
        <div>
            <h2 className='pageTitle'>Mijn connecties</h2>
        </div>
        <Footer />
        </>
    );
};

export default MyConnectionsPage;