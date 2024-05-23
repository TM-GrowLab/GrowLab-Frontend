import React from 'react';
import { useFetchExperience } from '../../hooks/useFetchExperienceFromUser';
import { Experience } from '../../types/Experience';

interface ExperienceBoxProps {
    UUID: string;
}

const ExperienceBox: React.FC<ExperienceBoxProps> = ({ UUID }) => {
    const { experiences, experienceStatus, error } = useFetchExperience(UUID);

    if (experienceStatus === 'pending') {
        return <div>Loading...</div>;
    }

    if (experienceStatus === 'error' && error) {
        return <div>{error.message}</div>;
    }

    if (!experiences || experiences.length === 0) {
        return <div>No experiences found</div>;
    }

    return (
        <div>
            {experiences.map((exp: Experience) => (
                <div key={exp.UUID} className='ervaring row'>
                    <img className='mini_logo marginRight' src={exp.icon} alt="Logo opleiding" />
                    <div>
                        <div className='row alignCenter'>
                            <p className='elza_20_bold marginRight'>{exp.title}</p>
                            <p>{exp.institution}</p>
                        </div>
                        <p className='marginTopZero'>{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceBox;
