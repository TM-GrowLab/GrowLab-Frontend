import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import CoachingClassCard from '../components/CoachingClassCard';
import UserPostSmall from '../components/Post/UserPostSmall';
import { Session } from '../types/session';
import { useFetchClassData } from '../hooks/user/useFetchClassesForUser';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';
import { useFetchPostsForCoachesByMember } from '../hooks/post/useFetchPostsForCoachesByMember';

interface CoachingDashboardStarterProps {
    // Add any props here
}

export const CoachingDashboardStarter: React.FC<CoachingDashboardStarterProps> = () => {
    
    const {userProfile, userProfileStatus, userProfileError} = useFetchUserProfile();
    const {classData, classStatus, classError} = useFetchClassData(userProfile?.sub || ''); 
    const {posts, postsStatus, postsError} = useFetchPostsForCoachesByMember(userProfile?.sub || ''); 

    const [classList, setClassList] = useState<any[]>([]);
    const [postList, setPostList] = useState<any[]>([]);

    useEffect(() => {
        if (classData) {
            setClassList(classData);
        }
        if (posts) {
            setPostList(posts);
        }
    }, [classData, posts]);

    if (classStatus === 'pending' || postsStatus === 'pending') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar />
            <h2 className='pageTitle'>Coaching Dashboard for Starters</h2>
            <div className='dashboard'>
                <div className='myClassList'>
                    {classList.length>0 && classList.map((item, index) => (
                        <div className="listItem" key={item.UUID}>
                            <CoachingClassCard  
                                UUID={item.UUID}
                                cardTitle={item.title}
                                classHost={item.idOwner}
                                progress={item && item.sessions && item.sessions.filter((item: Session) => item.completed).length}
                                progressMax={item && item.sessions && item.sessions.length}
                                members={Math.round(item.idMember.toString().length/37)}
                                nextSession={item.nextSession}
                            />
                        </div>
                    ))}
                </div>
                <div className='myCoachUpdates'>
                    {postList.length>0 && postList.map((item, index) => (
                        <div className="listItem" key={item.UUID}>
                            <UserPostSmall 
                                UUID={item.UUID}
                                poster={item.poster}
                                time={new Date(item.created_at)}
                                title={item.title}
                                description={item.content}
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

export default CoachingDashboardStarter;