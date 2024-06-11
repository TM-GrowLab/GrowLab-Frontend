import React, { useState } from 'react';
import { useFetchCurrentUser } from "../../hooks/user/useFetchCurrentUser";
import { CiMenuKebab } from "react-icons/ci";
import { useDeleteConnection } from "../../hooks/delete/useDeleteConnection";
import { useNavigate } from 'react-router-dom';

interface MiniConnectionCardProps {
  currentUserUUID: string;
  connectionUUID: string;
}

export const MiniConnectionCard: React.FC<MiniConnectionCardProps> = ({ currentUserUUID, connectionUUID }) => {
    const { currentUser } = useFetchCurrentUser(connectionUUID);
    const { deleteConnection } = useDeleteConnection();
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const onRemoveConnection = () => {
        deleteConnection({ UUID: currentUserUUID, connectionUUID });
        window.location.reload();
    };

    const handleShowDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleOnClickProfile = () => navigate(`/user/${connectionUUID}`);


    return (
        <div className="miniConnectionCard">
            <img className='profile_cover clickable' onClick={handleOnClickProfile} src={currentUser?.bannerPictureUrl || ""} alt="cover" />
            <img className='profielfoto clickable' onClick={handleOnClickProfile} src={currentUser?.profilePictureUrl || ""} alt="profielfoto" />
            <div className="row">
                <h4 className='clickable' onClick={handleOnClickProfile} >{currentUser?.firstName} {currentUser?.lastName}</h4>
                <CiMenuKebab onClick={handleShowDropdown} className="dropbtn" />
                {isDropdownVisible && (
                    <div className="dropdown-content">
                        <a onClick={onRemoveConnection}>Connectie verwijderen</a>
                    </div>
                )}
            </div>
            <p>Connectie sinds {currentUser?.dateJoined ? new Date(currentUser.dateJoined).toLocaleDateString() : 'Onbekend'}</p>
        </div>
    );
};

export default MiniConnectionCard;
