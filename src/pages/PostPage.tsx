import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import csvtojson from 'csvtojson';

import { NavBar } from '../components/NavBar';
// import CoachingClassCard from '../components/CoachingClassCard';
// import UserPostSmall from '../components/Post/UserPostSmall';
import UserPostLarge from '../components/Post/UserPostLarge';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';

interface PostPageProps {
    // Add any props here
}

export const PostPage: React.FC<PostPageProps> = () => {
    let myUUID = '';

    const { postUUID } = useParams<{ postUUID: string }>();

    const { userProfile, userProfileStatus, userProfileError } = useFetchUserProfile();

    useEffect(() => {
        if (userProfile) {
            myUUID = userProfile.sub;
        }
    }, [userProfile]);

    if (userProfileStatus === 'pending') {
        return (
            <div>
                <div className='postMain screen flexCenter'>
                    <div className="other"></div>
                    <div className="postContainer wideMainBox ">
                        <h1>Loading...</h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className='postMain screen flexCenter'>
                <div className="other"></div>
                <div className="postContainer wideMainBox ">
                    <UserPostLarge 
                        UUID={postUUID || ''}           
                    />
                </div>
            </div>
        </div>
    );
};

export default PostPage;