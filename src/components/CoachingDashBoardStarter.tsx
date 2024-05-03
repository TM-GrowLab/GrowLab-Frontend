import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import CoachingTrajectCard from './CoachingTrajectCard';
import csvtojson from 'csvtojson';

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
            <h1>Coaching dashboard</h1>
            <div>
                <div>
                {classListResponse.map((item, index) => (
                    <CoachingTrajectCard key={index} 
                        imgUrl="https://via.placeholder.com/150"
                        cardTitle={item.title}
                        // classHost={fetchUser(item.idCoach).then((u) => u.firstName) + ' ' + fetchUser(item.idCoach).then((u) => u.lastName)}
                        progress={item.currentCheckpoint}
                        progressMax={item.totalCheckpoints}
                        members={Math.round(item.idMember.toString().length/37)}
                        nextSession={item.nextSession}
                    />
                ))}
                </div>
                <div>

                </div>
            </div>
            
        </div>
    );
};

export default CoachingDashboardStarter;