import { useFetchUserProfile } from "../hooks/user/useFetchUserProfile";
import { useFetchStartups } from "../hooks/get/useFetchStartups";
import { StartupCard } from "../components/Feed/StartupCard";

export const FeedStartups: React.FC = () => {

    //alle startups ophalen
    const { startups, startupsStatus, error } = useFetchStartups();

    //current user ophalen 
    const { userProfile, userProfileStatus, userProfileError } = useFetchUserProfile();
    const UUIDCurrentUser = userProfile?.sub ?? '';

    

    return (
        <div>
            <h2 className='pageTitle'>Mijn startups +</h2>
            {startups?.map((startup: any, index: number) => (
                <div className='feed_container' key={index}>
                    {startup.idOwner === UUIDCurrentUser &&
                            <StartupCard
                                UUID={startup.UUID}
                                fotoUrl={startup.fotoUrl}
                                logoUrl={startup.logoUrl}
                                institution={startup.institution}
                                title={startup.title}
                            />
                    }
                </div>
            ))}
            <h2 className="pageTitle">Startups die ik volg</h2>
            {startups?.map((startup: any, index: number) => (
                <div className='feed_container' key={index}>
                    {startup.idOwner !== UUIDCurrentUser &&
                        <div>
                            <StartupCard    
                                UUID={startup.UUID}
                                fotoUrl={startup.fotoUrl}
                                logoUrl={startup.logoUrl}
                                institution={startup.institution}
                                title={startup.title}
                            />
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}