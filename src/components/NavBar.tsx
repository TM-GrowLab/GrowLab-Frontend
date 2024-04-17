
export const NavBar = () => {

    return (
        <>
                <nav>
                    <img src="src/images/LogoGrowLab.png" alt="logo" />
                    <ul>
                        <li className="nav_light">Community</li>
                        <li className="nav_light">Learning</li>
                        <li className="nav_light">Clients</li>
                    </ul>
                    <ul>
                        <button id="aanmelden" className="sec_button">Aanmelden</button>
                        <button id="registeren" className="pri_button">Registeren</button>
                    </ul>
                </nav>
        </>
    );
}