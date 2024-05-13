import React, { useEffect, useState } from 'react';

import { NavBar } from './NavBar';

import lamp from '../images/icons/emoji_objects_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import more_vert_W from '../images/icons/more_vert_W_FILL0_wght400_GRAD0_opsz24.svg'; 
import comment from '../images/icons/comment_24dp_FILL0_wght400_GRAD0_opsz24.svg';


interface UserPostSmallProps {
    poster: string;
    time: Date;
    title: string;
    description: string;
    likes: number;
    comments: number;
}

export const UserPostSmall: React.FC<UserPostSmallProps> = (
    {
        poster,
        time,
        title,
        description,
        likes,
        comments
    }) => {

        const [user, setUser] = useState<any>();

        useEffect(() => {
            const fetchUserData = async () => {
                try {
                    try {
                        let url = process.env.REACT_APP_URL;
                        const response = await fetch(
                            `${url}/user/${poster}`, 
                            {}
                        );
                
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        setUser(await response.json());
                    } catch (error) {
                        console.error(error);
                    }
                } catch (error) {
                    console.error(error);
                }
    
            };

            fetchUserData();
            console.log(poster);
        }, []);

    return (
        <div className='postItem'>
            <div className='topBar'>
                <div className="posterInfo">
                    {user && (
                        <img className='tinyImage' src={user.profilePictureUrl} alt="profile picture"></img>
                    )}
                    {user && ( 
                        <p>{user.firstName} {user.lastName}</p>
                    )}
                </div>
                <div className="timeInformation">
                    <p className="time">{time.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
            </div>
            <div className="mainContent">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>
            <div className="bottomBar">
                <div className='likeBtn'>
                    <img className='tinyIcon' src={lamp} alt="" />
                    <p className='elza_b'>{likes}</p>
                </div>
                <div className='commentBtn'>
                    <img className='tinyIcon' src={comment} alt="" />
                    <p className='elza_b'>{comments}</p>
                </div>
                <div className='moreBtn'>
                    <img className='tinyIcon' src={more_vert_W} alt="" />
                    <p className='elza_b'>meer</p>
                </div>
            </div>
        </div>
    );
};

export default UserPostSmall;