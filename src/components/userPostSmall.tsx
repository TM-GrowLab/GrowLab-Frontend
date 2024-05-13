import React from 'react';
import { NavBar } from './NavBar';

import lamp from '../images/icons/emoji_objects_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import more_vert from '../images/icons/more_vert_FILL0_wght400_GRAD0_opsz24.svg'; 


interface UserPostSmallProps {
    imgUrl: string;
    name: string;
    time: string;
    title: string;
    description: string;
    likes: number;
    comments: number;
}

export const UserPostSmall: React.FC<UserPostSmallProps> = (
    { 
        imgUrl,
        name,
        time,
        title,
        description,
        likes,
        comments
    }) => {
    return (
        <div className='postItem'>
            <div className='topBar'>
                <div className="posterInfo">
                    <img src={imgUrl} alt="profile picture"></img>
                    <p className="name">{name}</p>
                </div>
                <div className="timeInformation">
                    <p className="time">{time}</p>
                </div>
            </div>
            <div className="mainContent">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>
            <div className="bottomBar">
                <div className='likeBtn'>
                    <img src={lamp} alt="" />
                    <p className='elza_b'>{likes}</p>
                </div>
                <div className='commentBtn'>
                    <img src={lamp} alt="" />
                    <p className='elza_b'>{comments}</p>
                </div>
                <div className='moreBtn'>
                    <img src={more_vert} alt="" />
                    <p className='elza_b'>meer</p>
                </div>
            </div>
        </div>
    );
};

export default UserPostSmall;