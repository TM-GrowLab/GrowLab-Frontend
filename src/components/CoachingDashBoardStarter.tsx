import React from 'react';
import { NavBar } from './NavBar';

interface FeedProps {
    // Add any props here
}

export const Feed: React.FC<FeedProps> = () => {
    return (
        <div>
            <NavBar />
            <h1>Coaching dashboard</h1>
            <div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>
            
        </div>
    );
};

export default Feed;