// src/UserList.tsx
import React from 'react';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import ExperienceBox from  '../../components/Profile/ExperienceBox';
import cover from '../../images/cover.png';
import badge1 from '../../images/badge1.png';
import badge2 from '../../images/badge2.png';
import badge3 from '../../images/badge3.png';
import fotoErvaring from '../../images/fotoErvaring.png';
import fotoErvaring1 from '../../images/fotoErvaring1.png';
import logoStartUp from '../../images/logoStartUp.png';
import profielfoto from '../../images/profielfoto.png';


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
                    <p>{user.UUID}</p>
                    <section>
                        <img className='profile_cover' src={cover} alt="cover" />
                    </section>
                    <section className='profile_header'>
                        <img className='profielfoto' src={profielfoto} alt="profielfoto" />
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
                            <div className='badges'>
                                <h3>Badges</h3>
                                <img src={badge1} alt="badge" />
                                <img src={badge2} alt="badge" />
                                <img src={badge3} alt="badge" />
                            </div>
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
                        <div className='startup row'>
                            <img className='mini_logo marginRight' src={logoStartUp} alt="Logo Startup" />
                            <div className=''>
                                <div className='row alignCenter'>
                                    <p className='elza_20_bold marginRight'>Digital Capybara</p>
                                    <p>DevOps Automator</p>
                                </div>
                                <p className='marginTopZero'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, repellendus. Vero nostrum asperiores magnam culpa at, distinctio reiciendis porro? Itaque ratione distinctio fugit commodi, aspernatur blanditiis quidem eos. Excepturi, temporibus!</p>
                                <div>
                                    <img src={fotoErvaring} alt="foto" />
                                    <img src={fotoErvaring1} alt="foto" />
                                </div>
                            </div>
                        </div>
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