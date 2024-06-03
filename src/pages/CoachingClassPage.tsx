import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
import UserPostSmall from '../components/Post/UserPostSmall';
import { SessionCard } from '../components/SessionCard';
import { Session } from '../types/session';
import { useFetchClass } from '../hooks/useFetchClass';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';
import { Footer } from '../components/Footer';

interface CoachingClassPageProps {
    // Add any props here
}

export const CoachingClassPage: React.FC<CoachingClassPageProps> = () => {

    const [classResponse, setClassResponse] = useState<any>();
    
    const [myUser, setMyUser] = useState<any>();
    const [isOwner, setIsOwner] = useState<boolean>(false);

    const { classUUID } = useParams<{ classUUID: string }>();

    const { coachClass, coachClassStatus, error } = useFetchClass(classUUID || '');
    const { userProfile, userProfileStatus, userProfileError } = useFetchUserProfile();

    const token = localStorage.getItem('token');
    let url = process.env.REACT_APP_URL;

    useEffect(() => {
        if (coachClass) {
            setClassResponse(coachClass);
        }

        if (userProfile) {
            setMyUser(userProfile);
        }        
    }, [coachClass, userProfile]);

    const completedCheckpoints = classResponse && classResponse.sessions && classResponse.sessions.filter((item: Session) => item.completed).length;

    return (
        <>
            <NavBar />
            <header className='flexStart column'>
                <h2 className="pageTitle">{classResponse && classResponse.title}</h2>
                <div className="progressClass pageTitle">
                    <progress value={completedCheckpoints} max={classResponse && classResponse.sessions && classResponse.sessions.length}></progress>
                    <p>{completedCheckpoints} / {classResponse && classResponse.sessions && classResponse.sessions.length} checkpoints completed</p>
                </div>
            </header>
            
            <div className='dashboard'>
                <div className="column">
                    <h3>Sessies</h3>
                    <div className="myClassList">
                    {isOwner && 
                        <button className="button">Add Session</button>
                    }
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
                </div>
                
                <div className="column">
                    <h3>Coach updates</h3>
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
            <Footer />
        </>
    );
};

export default CoachingClassPage;