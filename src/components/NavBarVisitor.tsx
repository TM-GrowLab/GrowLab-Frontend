import React, { useEffect, useState } from 'react';
import logoGrowLab from '../images/LogoGrowLab.png';
import { useNavigate } from 'react-router-dom';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';
import {LogoutButton} from './LogoutButton';

export const NavBarVisitor = () => {
    const { userProfile, userProfileStatus, userProfileError } = useFetchUserProfile();

    const [userProfileData, setUserProfileData] = useState<any>();

    useEffect(() => {
        if (userProfileStatus === 'success') {
            setUserProfileData(userProfile);
        }
    });

    const navigate = useNavigate();

    const handleNavigateCommunity = () => {
        navigate('/community');
    }

    const handleNavigateLearning = () => {
        navigate('/dashboard');
    }

    const handleNavigateClients = () => {
        navigate('/clients');
    }

    const navigateToMyProfile = () => {
        navigate('/user/' + userProfile?.sub);
    }

    const navigateTologin = () => {
        navigate('/login');
    }

    return (
        <>
            <nav id='visitor'>
                <ul id="nav_items">
                    <li>
                        <img className="logo" src={logoGrowLab} alt="logo" />
                    </li>
                    <li className="nav_light" onClick={handleNavigateCommunity}>Community</li>
                    <li className="nav_light" onClick={handleNavigateLearning}>Coaching Dashboard</li>
                </ul>
                {localStorage.getItem('token') ? (
                    <>
                        <ul id="nav_buttons">
                            <button id="myProfile" className="pri_button" onClick={navigateToMyProfile}>Mijn Profiel</button>
                            <LogoutButton />
                        </ul>
                    </>
                ) : (
                    <ul id="nav_buttons_visitor">
                        <button id="aanmelden" className="sec_button" onClick={navigateTologin}>Aanmelden</button>
                        <button id="registeren" className="pri_button">Registeren</button>
                    </ul>
                )}
            </nav>
        </>
    );
}
