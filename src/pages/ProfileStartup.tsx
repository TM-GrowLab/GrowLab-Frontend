
// src/UserList.tsx
import React, { useEffect, useState } from 'react';
import ExperienceBox from '../components/Profile/ExperienceBox';
import StartupBox from '../components/Profile/StartupBox';
import { useFetchStartupByUUID } from '../hooks/get/useFetchStartupByUUID';
import { useParams } from 'react-router-dom';


export const Profile: React.FC = () => {
    

    const { UUID } = useParams<{ UUID: string }>();

    const { startup, startupStatus } = useFetchStartupByUUID(UUID || "");

    return (
        <div className="profile_container" key={startup?.UUID}>
            <section>
                <img className='profile_cover' src={startup?.fotoUrl || ""} alt="cover" />
            </section>
            <section className='profile_header'>
                <img className='profielfoto' src={startup?.logoUrl || ""} alt="profielfoto" />
                <div className='info'>
                    <div>
                        <h2>{startup?.institution}</h2>
                        <h3 className='min_bold'>{startup?.title}</h3>
                    </div>
                </div>
            </section>
            <section className='profile_part_one'>
                <div className='over_mij'>
                    <h3>Over mij</h3>
                    <p className='elza_p'>
                        {startup?.description}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Profile;
