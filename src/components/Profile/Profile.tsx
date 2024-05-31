// src/UserList.tsx
import React, { useEffect, useState } from 'react';
import ExperienceBox from  '../../components/Profile/ExperienceBox';
import StartupBox from '../../components/Profile/StartupBox';
import { useFetchUser } from '../../hooks/user/useFetchUser';
import { useFetchUserProfile } from '../../hooks/user/useFetchUserProfile';

interface ProfileProps {
    UUID: string;
}

export const Profile: React.FC<ProfileProps> = (
    {
        UUID
    }
) => {
    const [User, setUser] = useState<any>();
    const [myUuid, setMyUuid] = useState<string>();

    const { user, userStatus, userError} = useFetchUser(UUID);
    const {userProfile, userProfileStatus, userProfileError} = useFetchUserProfile();

    useEffect(() => {
        if (userStatus === 'success') {
            setUser(user);
        }
        if (userProfileStatus === 'success') {
            setMyUuid(userProfile?.sub);
        }
    }, [user, userProfile]);

    if (!User) {
        return <div>Loading...</div>;
    }

    return (
            <div className="profile_container" key={User.UUID}>
                <section>
                    <img className='profile_cover' src={User.bannerPictureUrl || ""} alt="cover" />
                </section>
                <section className='profile_header'>
                    <img className='profielfoto' src={User.profilePictureUrl || ""} alt="profielfoto" />
                    <div className='info'>
                        <div>
                            <h2>{User.firstName} {User.lastName}</h2>
                            <h3>Ambitious DevOps Automator</h3>
                        </div>
                        {User.UUID === myUuid &&
                            <button className='grey_button'>
                                Bewerken
                            </button>
                        }
                    </div>
                </section>
                <section className='profile_part_one'>
                    <div className='labels'>
                    <h3>Talenten</h3>
                        <div className='talenten'>
                            {User.talenten && User.talenten.split(",").map((talent: string, index: number) => (
                                <ul key={index} className='row bubble'>
                                    <li>{talent}</li>
                            </ul>
                        ))}
                        </div>
                        <h3>Interesses</h3>
                        <div className='interesses'>
                            {User.interesses && User.interesses.split(",").map((interesse: string, index: number) => (
                                <ul key={index} className='row bubble'>
                                    <li >{interesse}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className='over_mij'>
                        <h3>Over mij</h3>
                        <p className='elza_p'>
                            {User.about}
                        </p>
                    </div>
                </section>
                <section className='Startup profile_box'>
                    <h3>Startup geschiedenis</h3>
                    <StartupBox idOwner={User.UUID} />
                </section>
                <section className='profile_box'>
                    <h3>Opleidingen & ervaringen</h3>
                    <ExperienceBox UUID={User.experienceId} />
                </section>
            </div>
    );
};

export default Profile;