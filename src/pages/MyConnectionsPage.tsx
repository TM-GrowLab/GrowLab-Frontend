import React from 'react';
import { Footer } from '../components/Footer';

interface MyConnectionsProps {
    // Add any props here
}

export const MyConnectionsPage: React.FC<MyConnectionsProps> = () => {
    return (
        <>
        <div>
            <h2 className='pageTitle'>Mijn connecties</h2>
        </div>
        <Footer />
        </>
    );
};

export default MyConnectionsPage;