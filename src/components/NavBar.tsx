// import imgHeader from "../images/Header_img.png";
import logoGrowLab from "../images/LogoGrowLab.png";
import { useNavigate } from "react-router-dom";
import { useFetchUserProfile } from "../hooks/useFetchUserProfile";


export const NavBar = () => {
    const { userProfile, userProfileStatus, userProfileError} = useFetchUserProfile();

    const navigate = useNavigate();

    const handleNavigateCommunity = () => {
        navigate('/community');
    }

    const handleNavigateLearning = () => {
        navigate('/learning');
    }

    const handleNavigateClients = () => {
        navigate('/clients');
    }
    
    const navigateToMyProfile = () => {
        navigate('/myProfile')
    }

    const navigateTologin = () => {
        navigate('/login')
    }

    return (
        <>
            <div>
                <h1>Hier data test</h1>
                <p>{userProfile?.sub}</p>
                <p>{userProfile?.username}</p>
            </div>
                <nav>
                    <ul id="nav_items">
                        <li>
                            <img className="logo" src={logoGrowLab} alt="logo" />
                        </li>
                        <li className="nav_light" onClick={handleNavigateCommunity} >Community</li>
                        <li className="nav_light" onClick={handleNavigateLearning}>Learning</li>
                        <li className="nav_light" onClick={handleNavigateClients}>Clients</li>
                    </ul>
                    <ul id="nav_buttons">
                        <button id="aanmelden" className="sec_button" onClick={navigateTologin}>Aanmelden</button>
                        <button id="registeren" className="pri_button">Registeren</button>
                    </ul>
                </nav>
        </>
    );
}