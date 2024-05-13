import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import CoachingTrajectCard from './CoachingTrajectCard';
import csvtojson from 'csvtojson';
import UserPostSmall from './userPostSmall';

interface CoachingDashboardStarterProps {
    // Add any props here
}

export const CoachingDashboardStarter: React.FC<CoachingDashboardStarterProps> = () => {
    let myUUID = '';
    const [classListResponse, setClassListResponse] = useState<any[]>([]);
    const [postListResponse, setPostListResponse] = useState<any[]>([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                let url = process.env.REACT_APP_URL;
                const token = localStorage.getItem('token');
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

            fetchClassData();
            fetchPostsData();
        };

        const fetchClassData = async () => {
            try {
                let url = process.env.REACT_APP_URL;
                const response = await fetch(
                    `${url}/coach-class/forMember/${myUUID}`, 
                    {}
                );
        
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                const classes = await response.json();
                setClassListResponse(classes);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchPostsData = async () => {
            try {
                let url = process.env.REACT_APP_URL;
                const response = await fetch(
                    `${url}/post/forCoachesByMember/${myUUID}`, 
                    {}
                );
        
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const posts = await response.json();
                setPostListResponse(posts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
        
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
            console.log(u);
            return u;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <NavBar />
            <div className='dashboard'>
                <div className='myClassList' style={{ backgroundColor: 'yellow' }}>
                    {classListResponse.map((item, index) => (
                        <div className="listItem">
                            <CoachingTrajectCard key={index} 
                                imgUrl="https://via.placeholder.com/150"
                                cardTitle={item.title}
                                // classHost={fetchUser(item.idCoach).then((u) => u.firstName) + ' ' + fetchUser(item.idCoach).then((u) => u.lastName)}
                                progress={item.currentCheckpoint}
                                progressMax={item.totalCheckpoints}
                                members={Math.round(item.idMember.toString().length/37)}
                                nextSession={item.nextSession}
                            />
                        </div>
                    ))}
                </div>
                <div className='myCoachUpdates' style={{ backgroundColor: 'yellow' }}>
                    {postListResponse.map((item, index) => (
                        <div className="listItem">
                            <UserPostSmall key={index}
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