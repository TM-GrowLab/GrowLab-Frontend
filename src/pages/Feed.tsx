import React from 'react';
import { NavBar } from '../components/NavBar';
// import CoachingClassCard from '../components/CoachingClassCard';

interface FeedProps {
    // Add any props here
}

export const Feed: React.FC<FeedProps> = () => {
    return (
        <div>
            <NavBar />
            {/* <CoachingClassCard
                imgUrl="https://via.placeholder.com/150"
                cardTitle="Coole klas"
                // classHost="mark Business"
                progress={50}
                progressMax={100}
                members={10}
                nextSession="15/4"
            /> */}
        </div>
    );
};

export default Feed;