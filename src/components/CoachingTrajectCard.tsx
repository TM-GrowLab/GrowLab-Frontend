import React from 'react';
import { NavBar } from './NavBar';

import personIcon from '../images/icons/person_raised_hand_FILL0_wght400_GRAD0_opsz24.svg';
import calendarIcon from '../images/icons/calendar_month_FILL0_wght400_GRAD0_opsz24.svg';
import more_vert from '../images/icons/more_vert_FILL0_wght400_GRAD0_opsz24.svg';

interface CoachingTrajectCardProps {
    imgUrl: string;
    cardTitle: string;
    // classHost: string;
    progress: number;
    progressMax: number;
    members: number;
    nextSession: string;
}

export const CoachingTrajectCard: React.FC<CoachingTrajectCardProps> = (
    { 
        imgUrl, 
        cardTitle, 
        // classHost, 
        progress,
        progressMax,
        members,
        nextSession
    }) => {
    return (
        <div className='coaching_traject'>
            <img className='photo' src={imgUrl} alt="" />
            <div className='cardInformation'>
                <h3 className='cardTitle'>{cardTitle}</h3>
                {/* <p className='classHost'>{classHost}</p> */}
                <div className='progress'>
                    <p> {progress} / {progressMax} </p>
                    <progress value={progress} max={progressMax}> {progress} </progress>
                </div>
                <div className='extra'>
                    <div className='membersInfo'>
                        <img className='tinyIcon' src={personIcon} alt="members" />
                        <p>{members}</p>
                    </div>
                    <div className='sessionInfo'>
                        <img className='tinyIcon' src={calendarIcon} alt="next session" />
                        <p>{nextSession}</p>
                    </div>
                </div>
            </div>
            <div className='more' >
                <img className='tinyIcon' src={more_vert} alt="" />
            </div>
        </div>
    );
};

export default CoachingTrajectCard;