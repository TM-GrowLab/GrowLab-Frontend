import React from 'react';
import { useFetchStartup } from '../../hooks/useFetchStartupFromUser';
import { Startup } from '../../types/Startup';

interface StartupBoxProps {
    idOwner: string;
}

const StartupBox: React.FC<StartupBoxProps> = ({ idOwner }) => {
    const {startups, starupStatus, error} = useFetchStartup(idOwner);

    if (starupStatus === 'pending') {
        return <div>Loading...</div>;
    }

    if (starupStatus === 'error' && error) {
        return <div>{error.message}</div>;
    }

    if (!startups || startups.length === 0) {
        return <div>No experiences found</div>;
    }

    return (
        <div>
            {startups.map((startup: Startup) => (
                <div key={startup.UUID} className='startup row'>
                    <img className='mini_logo marginRight' src={startup.logoUrl} alt="Logo startup" />
                    <div>
                        <div className='row alignCenter'>
                            <p className='elza_20_bold marginRight'>{startup.institution}</p>
                            <p>{startup.title}</p>
                        </div>
                        <p className='marginTopZero'>{startup.description}</p>
                        <div>
                            <img src={startup.fotoUrl} alt="foto" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StartupBox;
