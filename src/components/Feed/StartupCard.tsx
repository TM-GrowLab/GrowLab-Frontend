import { CiMenuKebab } from "react-icons/ci";
import React, { useState } from "react";

interface StartupCardProps {
    fotoUrl: string;
    logoUrl: string;
    institution: string;
    title: string;
}

export const StartupCard: React.FC<StartupCardProps> = ({fotoUrl, logoUrl, institution, title}) => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);


    const handleShowDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const onRemoveConnection = () => {
        console.log('Connectie verwijderen');
        window.location.reload();
    };

    return (
        <div className="startup_card">
            <div className="cover">
                <img src={fotoUrl} alt="cover" />
            </div>
            <div className="row data">
                <img className="logo" src={logoUrl} alt="logo" />
                <section>
                    <h2>{institution}</h2>
                    <h3>{title}</h3>
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