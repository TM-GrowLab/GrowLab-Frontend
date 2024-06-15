import React, { useEffect, useState } from 'react';
import logoGrowLab from '../images/LogoGrowLab.png';
import { useNavigate } from 'react-router-dom';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';
import {LogoutButton} from './LogoutButton';
import { IoSearchOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";



export const NavBar = () => {
    const { userProfile, userProfileStatus, userProfileError } = useFetchUserProfile();

    const [userProfileData, setUserProfileData] = useState<any>();

    useEffect(() => {
        if (userProfileStatus === 'success') {
            setUserProfileData(userProfile);
        }
    });

    const navigate = useNavigate();

    const handleNavigateCommunity = () => {
        navigate('/feed');
    }

    const handleNavigateLearning = () => {
        navigate('/dashboard');
    }

    const handleNavigateStartups = () => {
        navigate('/startups');
    }

    const navigateToMyProfile = () => {
        navigate('/user/' + userProfile?.sub);
    }

    const navigateTologin = () => {
        navigate('/login');
    }

    const handleNavigateConnections = () => {
        navigate('/connections');
    }

    const handleNavigateCoaches = () => {
        // navigate('/coachDashboard');
    }

    return (
        <>
            <nav id='nav' className='flexCenter column'>
                <section>
                <img className="logo" src={logoGrowLab} alt="logo" />
                    <div className='navIcons'>
                        <ul className='row flexCenter'>
                            <li>
                                <IoSearchOutline />
                            </li>
                            <li>
                                <IoChatboxOutline />
                            </li>
                            <li>
                                <IoNotificationsOutline />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul id="nav_items">
                            <li className="nav_light" onClick={handleNavigateLearning}>Dashboard</li>
                            <li className="nav_light" onClick={handleNavigateCoaches}>Mijn coaches</li>
                            <li className="nav_light" onClick={handleNavigateConnections}>Mijn connecties</li>
                            <li className="nav_light" onClick={handleNavigateStartups}>Startups</li>
                            <li className="nav_light" onClick={handleNavigateCommunity}>Community</li>
                        </ul>
                    </div>
                </section>
                <section>
                    {localStorage.getItem('token') ? (
                        <>
                            <div id="nav_buttons">
                                <button id="myProfile" className="pri_button" onClick={navigateToMyProfile}>Mijn Profiel</button>
                                <LogoutButton />
                            </div>
                        </>
                    ) : (
                        <div className='column' id="nav_buttons">
                            <button id="aanmelden" className="sec_button" onClick={navigateTologin}>Aanmelden</button>
                            <button id="registeren" className="pri_button">Registeren</button>
                        </div>
                    )}
                </section>
            </nav>
        </>
    );
}
