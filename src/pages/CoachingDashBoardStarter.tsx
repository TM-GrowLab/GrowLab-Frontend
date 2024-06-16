import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import CoachingClassCard from '../components/CoachingClassCard';
import UserPostSmall from '../components/Post/UserPostSmall';
import { Session } from '../types/session';
import { useFetchClassData } from '../hooks/user/useFetchClassesForUser';
import { useFetchUserProfile } from '../hooks/user/useFetchUserProfile';
import { useFetchPostsForCoachesByMember } from '../hooks/post/useFetchPostsForCoachesByMember';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

interface CoachingDashboardStarterProps {
    // Add any props here
}

export const CoachingDashboardStarter: React.FC<CoachingDashboardStarterProps> = () => {
    const Navigate = useNavigate();
    
    const {userProfile, userProfileStatus, userProfileError} = useFetchUserProfile();
    const {classData, classStatus, classError} = useFetchClassData(userProfile?.sub || ''); 
    const {posts, postsStatus, postsError} = useFetchPostsForCoachesByMember(userProfile?.sub || ''); 

    const [userProfileData, setUserProfileData] = useState<any>({});
    const [classList, setClassList] = useState<any[]>([]);
    const [postList, setPostList] = useState<any[]>([]);

    useEffect(() => {
        if (userProfile && Object.keys(userProfileData).length === 0) { // Add condition to check if userProfileData is empty
            setUserProfileData(userProfile);
            if (userProfile && userProfile.role === 'coach') {
                console.log('Redirecting to coach dashboard');
                Navigate('/coachDashboard');
            }
        }
        if (classData) {
            setClassList(classData);
        }
        if (posts) {
            setPostList(posts);
        }
    }, [classData, posts, userProfile]);

    if (classStatus === 'pending' || postsStatus === 'pending') {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h2 className='pageTitle'>Coaching Dashboard for Starters</h2>
            <div className='dashboard'>
                <div className="column">
                    <h3>Mijn trajecten</h3>
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
                </div>
                <div className="column">
                <h3>Updates van je coaches</h3>
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
            <Footer />
        </>
    );
};

export default CoachingDashboardStarter;