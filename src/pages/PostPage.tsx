import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import csvtojson from 'csvtojson';

import { NavBar } from '../components/NavBar';
import CoachingClassCard from '../components/CoachingClassCard';
import UserPostSmall from '../components/Post/UserPostSmall';
import UserPostLarge from '../components/Post/UserPostLarge';

interface PostPageProps {
    // Add any props here
}

export const PostPage: React.FC<PostPageProps> = () => {
    let myUUID = '';

    const { postUUID } = useParams<{ postUUID: string }>();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                let url = process.env.REACT_APP_URL;
                const token = localStorage.getItem('token');
                const response = await fetch(`${url}/auth/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = await response.json();
                myUUID = data.sub;
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
        
    }, []);

    async function fetchUser(idCoach: any): Promise<any> {
        try {
            let url = process.env.REACT_APP_URL;
            const response = await fetch(
                `${url}/user/${idCoach}`, 
                {}
            );
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let u = await response.json();
            return u;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <NavBar />
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