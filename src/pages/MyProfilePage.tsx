import React from 'react';
import { NavBar } from '../components/NavBar';
import CurrentUserCard from '../components/Profile/CurrentUserCard';

interface MyProfilePageProps {
    // Add any props here
}

export const MyProfilePage: React.FC<MyProfilePageProps> = () => {
    const token = localStorage.getItem('token');

    const navigateTologin = () => {
        window.location.href = '/login';
    }

    return (
        <>
         <NavBar />
         {token ? <CurrentUserCard />  : 
            (
                <div className="container">
                    <h2>Aanmelden om je profiel te zien</h2>
                    <button id="aanmelden" className="sec_button" onClick={navigateTologin}>Aanmelden</button>
                </div>
            )
         }
         
            
        </>
    );
};

export default MyProfilePage ;