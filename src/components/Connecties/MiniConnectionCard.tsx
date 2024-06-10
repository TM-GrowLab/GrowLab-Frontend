import { useFetchCurrentUser } from "../../hooks/user/useFetchCurrentUser";
import { CiMenuKebab } from "react-icons/ci";


export const MiniConnectionCard: React.FC<{ connectionUUID: string }> = ({ connectionUUID }) => {
    const { currentUser, currentUserStatus, error } = useFetchCurrentUser(connectionUUID);

    return (
        <div className="miniConnectionCard">
            <img className='profile_cover' src={currentUser?.bannerPictureUrl || ""} alt="cover" />
            <img className='profielfoto' src={currentUser?.profilePictureUrl || ""} alt="profielfoto" />
            <div className="row">
                <h4>{currentUser?.firstName} {currentUser?.lastName}</h4>
                <CiMenuKebab />
            </div>
                <p>Connectie sinds {currentUser?.dateJoined ? new Date(currentUser.dateJoined).toLocaleDateString() : 'Onbekend'}</p>
            </div>
    );
}