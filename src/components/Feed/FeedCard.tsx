import React, { useState } from 'react';
import { useFetchCurrentUser } from "../../hooks/user/useFetchCurrentUser";
import { CiMenuKebab } from "react-icons/ci";
import { useDeleteConnection } from "../../hooks/delete/useDeleteConnection";
import { useNavigate } from 'react-router-dom';
import { useAddConnection } from '../../hooks/patch/useAddConnection';

interface FeedCardProps {
    UUIDcurrentUser: string;
    UUID: string;
    profilePictureUrl: string;
    firstName: string;
    lastName: string;
    functionn: string;
    interesses: string;
    talenten: string;
}

export const FeedCard: React.FC<FeedCardProps> = ({UUIDcurrentUser, UUID, profilePictureUrl, firstName, lastName, interesses, functionn, talenten}) => {
   
    const { addConnection, patchData, patchStatus, patchError } = useAddConnection();
    const { deleteConnection, deleteData, deleteStatus, deleteError } = useDeleteConnection();
    const { currentUser, currentUserStatus, error } = useFetchCurrentUser(UUIDcurrentUser);

    const navigate = useNavigate();

    const handleAddConnection = () => {
        addConnection({ UUID: UUIDcurrentUser, connectionUUID: UUID });
        window.location.reload();
    };

    const handleRemoveConnection = () => {
        deleteConnection({ UUID: UUIDcurrentUser, connectionUUID: UUID });
        window.location.reload();
    };

    const isAlreadyConnected = () => {
        return currentUser?.connectionsStarters?.split(",").includes(UUID);
    };
   
    const handleOnClickProfile = () => navigate(`/user/${UUID}`);


    return (
         <div className='feedcard row'>
              <div>
                <img src={profilePictureUrl} alt="profiel foto" />
              </div>
              <div className='deel_een'>
                <h2>{firstName} {lastName}</h2>
                <h3>{functionn}</h3>
                <div className='interesses'>
                    <h3>Interesses</h3>
                    <ul className='row bubble'>
                        {interesses && interesses.split(",").map((interesse: string, index: number) => (
                                <li>{interesse}</li>
                        ))}
                         </ul>
                    </div>
                    <div className='interesses'>
                    <h3>Talenten</h3>
                    <ul className='row bubble'>
                        {talenten && talenten.split(",").map((talent: string, index: number) => (
                                <li>{talent}</li>
                        ))}
                         </ul>
                    </div>
              </div>
              <div className='column deel_twee' id="nav_buttons">
                    {isAlreadyConnected() ? (
                        <button className='sec_button' onClick={handleRemoveConnection} disabled={deleteStatus === 'pending'}  >
                            Connectie verwijderen
                        </button>
                    ) : (
                        <button className='sec_button' onClick={handleAddConnection} disabled={patchStatus === 'pending'}>
                            Connecteren
                        </button>
                    )}
                    <button id="registeren" className="pri_button" onClick={handleOnClickProfile}>Meer zien</button>
                </div>
         </div>
    );
};

export default FeedCard;
