import React from 'react';
import { NavBar } from '../components/NavBar';
// import CoachingClassCard from '../components/CoachingClassCard';
import { useFetchUsers } from '../hooks/user/useFetchUsers';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';
import { FeedCard } from '../components/Feed/FeedCard';

interface FeedProps {
    // Add any props here
}

export const Feed: React.FC<FeedProps> = () => {

    const { userProfile, userProfileStatus, userProfileError } = useFetchUserProfile();
    const UUIDCurrentUser = userProfile?.sub ?? '';
    const { users, usersStatus, error } = useFetchUsers();

    return (
        <div>
            <h2 className='pageTitle'>Community/ matching</h2>
            {users?.map((user: any, index: number) => (

                <div className='feed_container' key={index}>
                    {user.UUID !== UUIDCurrentUser &&
                        <FeedCard
                            UUIDcurrentUser={UUIDCurrentUser}
                            UUID={user.UUID}
                            profilePictureUrl={user.profilePictureUrl}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            functionn={user.function}
                            interesses={user.interesses}
                            talenten={user.talenten}
                        />
                    }
                </div>
            ))}
        </div>
    );
};

export default Feed;