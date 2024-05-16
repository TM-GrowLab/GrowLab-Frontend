import React from 'react';
import { NavBar } from '../components/NavBar';
import cover from '../images/cover.png';
import badge1 from '../images/badge1.png';
import badge2 from '../images/badge2.png';
import badge3 from '../images/badge3.png';
import fotoErvaring from '../images/fotoErvaring.png';
import fotoErvaring1 from '../images/fotoErvaring1.png';
import logoStartUp from '../images/logoStartUp.png';
import logoThomasMore from '../images/logoThomasMore.png';
import profielfoto from '../images/profielfoto.png';

interface MyProfilePageProps {
    // Add any props here
}

export const MyProfilePage: React.FC<MyProfilePageProps> = () => {
    return (
        <>
         <NavBar />
            <div className="profile_container">
                <section>
                    <img className='profile_cover' src={cover} alt="cover" />
                </section>
                <section className='profile_header'>
                    <img className='profielfoto' src={profielfoto} alt="profielfoto" />
                    <div className='info'>
                        <div>
                            <h2>Joske Vermeulen</h2>
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
                            <ul>
                                <li>Docker</li>
                                <li>AWS</li>
                                <li>Git</li>
                                <li>Kubernetes</li>
                                <li>Linux</li>
                                <li>Azure</li>
                            </ul>
                        </div>
                        <div className='interesses'>
                            <h3>Interesses</h3>
                            <ul>
                                <li>DevOps</li>
                                <li>AI</li>
                                <li>Robotica</li>
                                <li>Smart Cities</li>
                                <li>Linux</li>
                            </ul>
                        </div>
                    </div>
                    <div className='over_mij'>
                        <h3>Over mij</h3>
                        <p>
                        Ik ben Joske Vermeulen, een gedreven DevOps automator met een passie voor startups. Mijn focus ligt op het automatiseren van ontwikkelings- en operationele processen om startups te helpen bij het optimaliseren van hun technologische infrastructuur. Mijn doel is om efficiëntie en schaalbaarheid te bevorderen, en ik deel graag mijn kennis en ervaring om bij te dragen aan de groei van de startupgemeenschap. 
                        Mijn fascinatie voor de dynamiek van startups drijft mijn toewijding om innovatieve technologische oplossingen te bieden die bijdragen aan het succes van opkomende bedrijven.
                        </p>
                    </div>
                </section>
                <section className='Startup'>
                    <h3>Startup geschiedenis</h3>
                    <div className='startup'>
                        <img src={logoStartUp} alt="Logo Startup" />
                        <div>
                            <div>
                                <p className='elza_20_bold'>Digital Capybara</p>
                                <p>DevOps Automator</p>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, repellendus. Vero nostrum asperiores magnam culpa at, distinctio reiciendis porro? Itaque ratione distinctio fugit commodi, aspernatur blanditiis quidem eos. Excepturi, temporibus!</p>
                            <div>
                                <img src={fotoErvaring} alt="foto" />
                                <img src={fotoErvaring1} alt="foto" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>Opleidingen & ervaringen</h3>
                    <div className='ervaring'>
                        <img src={logoThomasMore} alt="Logo opleiding" />
                        <div>
                            <div>
                                <p className='elza_20_bold'>Elektronica ICT</p>
                                <p>Thomas More</p>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, repellendus. Vero nostrum asperiores magnam culpa at, distinctio reiciendis porro? Itaque ratione distinctio fugit commodi, aspernatur blanditiis quidem eos. Excepturi, temporibus!</p>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MyProfilePage ;