import React from 'react';
import { NavBar } from './NavBar';

import personIcon from '../images/icons/person_raised_hand_FILL0_wght400_GRAD0_opsz24.svg';
import calendarIcon from '../images/icons/calendar_month_FILL0_wght400_GRAD0_opsz24.svg';
import more_vert from '../images/icons/more_vert_FILL0_wght400_GRAD0_opsz24.svg';

interface UserPostSmallProps {
    imgUrl: string;
    cardTitle: string;
    // classHost: string;
    progress: number;
    progressMax: number;
    members: number;
    nextSession: string;
}

export const UserPostSmall: React.FC<UserPostSmallProps> = (
    { 
        imgUrl,
    }) => {
    return (
        <div className='postItem'>
            <div className='topBar'>
                <div className="poster_info">
                    <img src={imgUrl} alt="profile picture"></img>
                    <p className="name">{}</p>
                </div>
                <div className="timeInformation">
                    <p className="time">{}</p>
                </div>
            </div>
            <div className="mainContent">
                <p className="title">{}</p>
                <p className="description">{}</p>
            </div>
            <div className="bottomBar">
                <button>
                    <img src="" alt="" />
                    <p>{}</p>
                </button>
            </div>
        </div>
    );
};

export default UserPostSmall;