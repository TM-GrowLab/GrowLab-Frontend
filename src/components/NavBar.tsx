import imgHeader from "../images/Header_img.png";
import logoGrowLab from "../images/LogoGrowLab.png";
import { useNavigate } from "react-router-dom";


export const NavBar = () => {
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

    const navigateToAanmeldGegevens = () => {
        console.log('navigate to aanmeldgegevens')
        navigate('/aanmeldgegevens')
    }

    return (
        <>
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
                        <button id="aanmelden" className="sec_button">Aanmelden</button>
                        <button id="registeren" className="pri_button">Registeren</button>
                    </ul>
                </nav>
        </>
    );
}