import { CiMenuKebab } from "react-icons/ci";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface StartupCardProps {
    UUID: string;
    fotoUrl: string;
    logoUrl: string;
    institution: string;
    title: string;
}

export const StartupCard: React.FC<StartupCardProps> = ({UUID,fotoUrl, logoUrl, institution, title}) => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);


    const handleShowDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const onRemoveConnection = () => {
        console.log('Connectie verwijderen');
        window.location.reload();
    };

    const navigate = useNavigate();

    const handleOnClickProfile = () => {
        navigate(`/startup/${UUID}`);
    }

    return (
        <div className="startup_card">
            <div className="cover">
                <img className="clickable" onClick={handleOnClickProfile} src={fotoUrl} alt="cover" />
            </div>
            <div className="row data">
                <img className="logo" src={logoUrl} alt="logo" />
                <section >
                    <h2 className="clickable" onClick={handleOnClickProfile} >{institution}</h2>
                    <h3 className="clickable" onClick={handleOnClickProfile}>{title}</h3>
                </section>
                <CiMenuKebab onClick={handleShowDropdown} className="dropbtn" />
                {isDropdownVisible && (
                    <div className="dropdown-content">
                        <a onClick={onRemoveConnection}>Connectie verwijderen</a>
                    </div>
                )}
            </div>

        </div>
    );
}