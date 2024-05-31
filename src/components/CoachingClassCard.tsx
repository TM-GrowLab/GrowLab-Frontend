import React, { useEffect, useState } from 'react';
// import { NavBar } from './NavBar';
import {useNavigate} from 'react-router-dom';

import personIcon from '../images/icons/person_raised_hand_FILL0_wght400_GRAD0_opsz24.svg';
import calendarIcon from '../images/icons/calendar_month_FILL0_wght400_GRAD0_opsz24.svg';
import more_vert from '../images/icons/more_vert_FILL0_wght400_GRAD0_opsz24.svg';
import { useFetchUser } from '../hooks/user/useFetchUser';

interface CoachingClassCardProps {
    UUID: string;
    cardTitle: string;
    classHost: string;
    progress: number;
    progressMax: number;
    members: number;
    nextSession: string;
}

export const CoachingClassCard: React.FC<CoachingClassCardProps> = (
    { 
        UUID,
        cardTitle, 
        classHost, 
        progress,
        progressMax,
        members,
        nextSession
    }) => {
        const [host, setHost] = useState<any>();
        const { user, userStatus, userError} = useFetchUser(classHost);

        const navigate = useNavigate();
        const handleOnClick = () => navigate(`/class/${UUID}`);

        useEffect(() => {
            if (user) {
                setHost(user);
            }
        }, [user]);
        
    return (
        <div className='coaching_Class boxShadow' onClick={handleOnClick}>
            {host && (
                <img className='mediumImage photo' src={host.profilePictureUrl} alt="profile"></img>
            )}
            <div className='cardInformation'>
                <h3 className='cardTitle'>{cardTitle}</h3>
                {host && (
                    <p className='classHost'>{`${host.firstName} ${host.lastName}`}</p>
                )}
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

export default CoachingClassCard;