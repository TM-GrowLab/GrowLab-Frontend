import React, { useEffect, useState } from 'react';
import CoachingClassCard from '../components/CoachingClassCard';
import UserPostSmall from '../components/Post/UserPostSmall';
import { Session } from '../types/session';
import { Footer } from '../components/Footer';
import { useFetchClassDataForOwner } from '../hooks/user/useFetchClassesForOwner';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';


export const CoachingDashboardCoach: React.FC = () => {
    let myUUID = '';
    const [classListResponse, setClassListResponse] = useState<any[]>([]);
    const [postListResponse, setPostListResponse] = useState<any[]>([]);

    const {userProfile, userProfileStatus, userProfileError} = useFetchUserProfile();
    const {classData, classStatus, classError} = useFetchClassDataForOwner(userProfile?.sub || ''); 

    useEffect(() => {
        if (classData) {
            setClassListResponse(classData);
        }
    }, [classData]);
    
    return (
        <><div>
            <h2 className='pageTitle'>Coaching Dashboard voor Coaches</h2>
            <div className='dashboard'>
                <div className='myClassListCoach'>
                    {classListResponse && classListResponse.length > 0 && classListResponse.map((item, index) => (
                        <div className="listItem" key={item.UUID}>
                            <CoachingClassCard
                                UUID={item.UUID}
                                cardTitle={item.title}
                                classHost={item.idOwner}
                                progress={item && item.sessions && item.sessions.filter((item: Session) => item.completed).length}
                                progressMax={item && item.sessions && item.sessions.length}
                                members={Math.round(item.idMember.toString().length / 37)}
                                nextSession={item.nextSession} />
                        </div>
                    ))}
                </div>
                {/* <div className='myCoachUpdates'>
                    {postListResponse.length > 0 && postListResponse.map((item, index) => (
                        <div className="listItem" key={item.UUID}>
                            <UserPostSmall
                                UUID={item.UUID}
                                poster={item.poster}
                                time={new Date(item.created_at)}
                                title={item.title}
                                description={item.content}
                                likes={Math.round(item.likes.toString().length / 37)}
                                comments={Math.round(item.comments.toString().length / 37)} />
                        </div>
                    ))}
                </div> */}
            </div>
        </div><Footer />
        </>

    );
};

export default CoachingDashboardCoach;