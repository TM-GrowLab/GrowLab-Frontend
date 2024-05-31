// src/UserList.tsx
import React from 'react';
import { useFetchUsers } from '../../hooks/user/useFetchUsers';
import ExperienceBox from  '../../components/Profile/ExperienceBox';
import StartupBox from '../../components/Profile/StartupBox';


const UserList: React.FC = () => {
    const { users, usersStatus, error } = useFetchUsers();

    if (usersStatus === 'pending') {
        return <div>Loading...</div>;
    }

    if (usersStatus === 'error' && error) {
        return <div>Error: {error.message}</div>;
    }

    if (!users || !Array.isArray(users)) {
        return <div>Error: Data is not an array</div>;
    }


    return (
        <div>
            {users.map(user => (
                <div className="profile_container" key={user.UUID}>
                    <section>
                        <img className='profile_cover' src={user.bannerPictureUrl} alt="cover" />
                    </section>
                    <section className='profile_header'>
                        <img className='profielfoto' src={user.profilePictureUrl} alt="profielfoto" />
                        <div className='info'>
                            <div>
                                <h2>{user.firstName} {user.lastName}</h2>
                                <h3>Ambitious DevOps Automator</h3>
                            </div>
                            <button className='grey_button'>
                                Bewerken
                            </button>
                        </div>
                    </section>
                    <section className='profile_part_one'>
                        <div className='labels'>
                            <div className='talenten'>
                                <h3>Talenten</h3>
                                <ul className='row bubble'>
                                    {user.talenten && user.talenten.split(", ").map((talent, index) => (
                                        <li key={index}>{talent}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='interesses'>
                                <h3>Interesses</h3>
                                <ul className='row bubble'>
                                    {user.interesses && user.interesses.split(", ").map((interesse, index) => (
                                        <li key={index}>{interesse}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='over_mij'>
                            <h3>Over mij</h3>
                            <p>
                               {user.about}
                            </p>
                        </div>
                    </section>
                    <section className='Startup profile_box'>
                        <h3>Startup geschiedenis</h3>
                        <StartupBox idOwner={user.UUID} />
                    </section>
                    <section className='profile_box'>
                        <h3>Opleidingen & ervaringen</h3>
                        <ExperienceBox UUID={user.experienceId} />
                    </section>
                </div>
            ))}
        </div>
    );
};

export default UserList;