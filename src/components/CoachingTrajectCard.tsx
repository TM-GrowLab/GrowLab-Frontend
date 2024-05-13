import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import {useNavigate} from 'react-router-dom';

import personIcon from '../images/icons/person_raised_hand_FILL0_wght400_GRAD0_opsz24.svg';
import calendarIcon from '../images/icons/calendar_month_FILL0_wght400_GRAD0_opsz24.svg';
import more_vert from '../images/icons/more_vert_FILL0_wght400_GRAD0_opsz24.svg';

interface CoachingTrajectCardProps {
    UUID: string;
    cardTitle: string;
    classHost: string;
    progress: number;
    progressMax: number;
    members: number;
    nextSession: string;
}

export const CoachingTrajectCard: React.FC<CoachingTrajectCardProps> = (
    { 
        UUID,
        cardTitle, 
        classHost, 
        progress,
        progressMax,
        members,
        nextSession
    }) => {
        const [user, setUser] = useState<any>();

        const navigate = useNavigate();
        const handleOnClick = () => navigate(`/class/${UUID}`);

        useEffect(() => {
            const fetchUserData = async () => {
                try {
                    try {
                        let url = process.env.REACT_APP_URL;
                        const response = await fetch(
                            `${url}/user/${classHost}`, 
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
        }, []);
        
    return (
        <div className='coaching_traject boxShadow' onClick={handleOnClick}>
            {user && (
                <img className='mediumImage photo' src={user.profilePictureUrl} alt="profile picture"></img>
            )}
            <div className='cardInformation'>
                <h3 className='cardTitle'>{cardTitle}</h3>
                {user && (
                    <p className='classHost'>{`${user.firstName} ${user.lastName}`}</p>
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

export default CoachingTrajectCard;