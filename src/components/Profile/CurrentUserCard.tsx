import React from 'react';
import { useFetchUser } from '../../hooks/useFetchUser';
import { useFetchUserProfile } from '../../hooks/useFetchUserProfile';
import ExperienceBox from  './ExperienceBox';
import StartupBox from './StartupBox';


const CurrentUserCard: React.FC = () => {

    const { userProfile} = useFetchUserProfile();
    const  userUUID  = userProfile?.sub || '';
    const { currentUser, currentUserStatus, error } = useFetchUser(userUUID);

    if (currentUserStatus === 'pending') {
        return <div>Loading...</div>;
    }

    if (currentUserStatus === 'error' && error) {
        return <div>Error: {error.message}</div>;
    }

    if (!currentUser) {
        return <div>Error: Data is not an array</div>;
    }


    return (
        
        <div>
                <div className="profile_container" key={currentUser.UUID}>
                    <section>
                        <img className='profile_cover' src={currentUser.bannerPictureUrl} alt="cover" />
                    </section>
                    <section className='profile_header'>
                        <img className='profielfoto' src={currentUser.profilePictureUrl} alt="profielfoto" />
                        <div className='info'>
                            <div>
                                <h2>{currentUser.firstName} {currentUser.lastName}</h2>
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
                                    {currentUser.talenten && currentUser.talenten.split(", ").map((talent, index) => (
                                        <li key={index}>{talent}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='interesses'>
                                <h3>Interesses</h3>
                                <ul className='row bubble'>
                                    {currentUser.interesses && currentUser.interesses.split(", ").map((interesse, index) => (
                                        <li key={index}>{interesse}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='over_mij'>
                            <h3>Over mij</h3>
                            <p>
                               {currentUser.about}
                            </p>
                        </div>
                    </section>
                    <section className='Startup profile_box'>
                        <h3>Startup geschiedenis</h3>
                        <StartupBox idOwner={currentUser.UUID} />
                    </section>
                    <section className='profile_box'>
                        <h3>Opleidingen & ervaringen</h3>
                        <ExperienceBox UUID={currentUser.experienceId} />
                    </section>
                </div>
        </div>
    );
};

export default CurrentUserCard;