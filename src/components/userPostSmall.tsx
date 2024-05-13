import React from 'react';
import { NavBar } from './NavBar';

import lamp from '../images/icons/emoji_objects_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import more_vert_W from '../images/icons/more_vert_W_FILL0_wght400_GRAD0_opsz24.svg'; 
import comment from '../images/icons/comment_24dp_FILL0_wght400_GRAD0_opsz24.svg';


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