import React from 'react';
import { Footer } from '../components/Footer';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';
import { useFetchCurrentUser } from '../hooks/user/useFetchCurrentUser';
import { useState } from 'react';
import { MiniConnectionCard } from '../components/Connecties/MiniConnectionCard';

interface MyConnectionsProps {
    // Add any props here
}

export const MyConnectionsPage: React.FC<MyConnectionsProps> = () => {

    const { userProfile, userProfileStatus, userProfileError } = useFetchUserProfile();
    const UUIDCurrentUser = userProfile?.sub ?? '';
    const { currentUser, currentUserStatus, error } = useFetchCurrentUser(UUIDCurrentUser);
  
    return (
        <>
            <h2 className='pageTitle'>Mijn connecties</h2>
        <div id='connecties' className='row'>    
            {currentUser?.connectionsStarters && currentUser?.connectionsStarters.split(",").filter(Boolean).map((connectieUUID: string, index: number) => (
                <MiniConnectionCard key={index} connectionUUID={connectieUUID} currentUserUUID={UUIDCurrentUser} />
            ))}        
        </div>
        <Footer />
        </>
    );
};

export default MyConnectionsPage;