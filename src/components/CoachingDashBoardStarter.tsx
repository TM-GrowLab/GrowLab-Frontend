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
                        <UserPostSmall key={1} 
                            imgUrl='https://via.placeholder.com/150'
                            name='Joske Vermeulen'
                            time='12:00'
                            title='This is an examplte title.'
                            description='lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'
                            likes={5}
                            comments={1} 

                        />
                        <UserPostSmall key={2} 
                            imgUrl='https://via.placeholder.com/150'
                            name='Joske Vermeulen'
                            time='12:00'
                            title='This is an examplte title.'
                            description='lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'
                            likes={5}
                            comments={1} 

                        />
                        <UserPostSmall key={3} 
                            imgUrl='https://via.placeholder.com/150'
                            name='Joske Vermeulen'
                            time='12:00'
                            title='This is an examplte title.'
                            description='lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'
                            likes={5}   
                            comments={1} 
                        />
                        <UserPostSmall key={4} 
                            imgUrl='https://via.placeholder.com/150'
                            name='Joske Vermeulen'
                            time='12:00'
                            title='This is an examplte title.'
                            description='lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'
                            likes={5} 
                            comments={1} 

                        />
                        <UserPostSmall key={4} 
                            imgUrl='https://via.placeholder.com/150'
                            name='Joske Vermeulen'
                            time='12:00'
                            title='This is an examplte title.'
                            description='lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'
                            likes={5}   
                            comments={1} 

                        />
                </div>
            </div>
            
        </div>
    );
};

export default CoachingDashboardStarter;