import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
import UserPostSmall from '../components/Post/UserPostSmall';
import { SessionCard } from '../components/SessionCard';
import { Session } from '../types/session';

interface CoachingClassPageProps {
    // Add any props here
}

export const CoachingClassPage: React.FC<CoachingClassPageProps> = () => {

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
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
        fetchClass(classUUID);
        
    }, []);

    // async function fetchUser(idCoach: any): Promise<any> {
    //     try {
    //         let url = process.env.REACT_APP_URL;
    //         const response = await fetch(
    //             `${url}/user/${idCoach}`, 
    //             {}
    //         );
    
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         let u = await response.json();
    //         return u;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

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

    const completedCheckpoints = classResponse && classResponse.sessions && classResponse.sessions.filter((item: Session) => item.completed).length;

    return (
        <div>
            <NavBar />
            <h2 className="pageTitle">{classResponse && classResponse.title}</h2>
            <div className="progressClass pageTitle">
                <progress value={completedCheckpoints} max={classResponse && classResponse.sessions && classResponse.sessions.length}></progress>
                <p>{completedCheckpoints} / {classResponse && classResponse.sessions && classResponse.sessions.length} checkpoints completed</p>
            </div>
            <div className='dashboard'>
                <div className="myClassList">
                    {classResponse && 
                    classResponse.sessions && 
                    classResponse.sessions != null && 
                    classResponse.sessions.length > 0 && 
                    classResponse.sessions.map((item: Session) => (
                        <div className={`listItem ${item.completed === true ? 'completed' : ''}`} key={item.UUID}>
                            <SessionCard  
                                key={item.UUID}
                                Title={item.title}
                                Description={item.description}
                                sDate={item.date} 
                                URL={item.urlSession}
                            />
                        </div>
                        
                    ))}
                    
                </div>
                <div className="myCoachUpdates">
                        {classResponse && 
                        classResponse.posts && 
                        classResponse.posts != null && 
                        classResponse.posts.length > 0 && 
                        classResponse.posts.map((item: any) => (
                        <div className="" key={item.UUID}>

                            <UserPostSmall  
                                key={item.UUID}
                                UUID={item.UUID}
                                title={item.title}
                                description={item.content} 
                                poster={item.poster} 
                                time={item.created_at}
                                likes={Math.round(item.likes.toString().length/37)}
                                comments={Math.round(item.comments.toString().length/37)}
                            />
                        </div>
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default CoachingClassPage;