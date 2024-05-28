import React from 'react';
import logoGrowLab from '../images/LogoGrowLab.png';
import { useNavigate } from 'react-router-dom';
import { useFetchUserProfile } from '../hooks/useFetchUserProfile';
import {LogoutButton} from './LogoutButton';

export const NavBar = () => {
    const { userProfile, userProfileStatus, userProfileError } = useFetchUserProfile();

    const navigate = useNavigate();

    const handleNavigateCommunity = () => {
        navigate('/community');
    }

    const handleNavigateLearning = () => {
        navigate('/learning');
    }

    const handleNavigateClients = () => {
        navigate('/clients');
    }

    const navigateToMyProfile = () => {
        navigate('/myProfile');
    }

    const navigateTologin = () => {
        navigate('/login');
    }

    return (
        <>
            <nav>
                <ul id="nav_items">
                    <li>
                        <img className="logo" src={logoGrowLab} alt="logo" />
                    </li>
                    <li className="nav_light" onClick={handleNavigateCommunity}>Community</li>
                    <li className="nav_light" onClick={handleNavigateLearning}>Learning</li>
                    <li className="nav_light" onClick={handleNavigateClients}>Clients</li>
                </ul>
                {userProfile?.sub ? (
                    <>
                        <span>Welkom {userProfile.username}</span>
                        <ul id="nav_buttons">
                            <button id="myProfile" className="pri_button" onClick={navigateToMyProfile}>Mijn Profiel</button>
                            <LogoutButton />
                        </ul>
                    </>
                ) : (
                    <ul id="nav_buttons">
                        <button id="aanmelden" className="sec_button" onClick={navigateTologin}>Aanmelden</button>
                        <button id="registeren" className="pri_button">Registeren</button>
                    </ul>
                )}
            </nav>
        </>
    );
}
