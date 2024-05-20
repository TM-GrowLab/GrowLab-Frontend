import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import csvtojson from 'csvtojson';

import { NavBar } from '../components/NavBar';
import CoachingClassCard from '../components/CoachingClassCard';
import UserPostSmall from '../components/Post/UserPostSmall';
import UserPostLarge from '../components/Post/UserPostLarge';
import { SessionCard } from '../components/SessionCard';
import { Session } from '../types/session';

interface CoachingClassPageProps {
    // Add any props here
}

export const CoachingClassPage: React.FC<CoachingClassPageProps> = () => {
    let myUUID = '';

    const [classResponse, setClassResponse] = useState<any>();

    const { classUUID } = useParams<{ classUUID: string }>();

    const token = localStorage.getItem('token');
    let url = process.env.REACT_APP_URL;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${url}/auth/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = await response.json();
                myUUID = data.sub;
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
        fetchClass(classUUID);
        
    }, []);

    async function fetchUser(idCoach: any): Promise<any> {
        try {
            let url = process.env.REACT_APP_URL;
            const response = await fetch(
                `${url}/user/${idCoach}`, 
                {}
            );
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let u = await response.json();
            return u;
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchClass(idClass: any): Promise<any> {
        try {
            const response = await fetch(
                `${url}/coach-class/${idClass}`, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let c = await response.json();
            setClassResponse(c);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <NavBar />
            <div className='screen flexCenter'>
                <div className="sessions">
                    {classResponse && 
                    classResponse.sessions && 
                    classResponse.sessions != null && 
                    classResponse.sessions.length > 0 && 
                    classResponse.sessions.map((item: Session) => (
                        <SessionCard  
                            key={item.UUID}
                            Title={item.title}
                            Description={item.description}
                            sDate={item.date} 
                            URL={item.urlSession}
                        />
                        
                    ))}
                </div>
                <div className="coachingClassContainer wideMainBox ">

                </div>
            </div>
        </div>
    );
};

export default CoachingClassPage;