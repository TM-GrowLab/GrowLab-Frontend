import imgHeader from "../images/Header_img.png";
import logoGrowLab from "../images/LogoGrowLab.png";
import { NavBar } from "./NavBar";

export const HomePage = () => {

    return (
        <>
                <NavBar />
                <header>
                    <div className="card_header">
                        <h1> <em className="bold">Durf</em> de volgende</h1>
                        <h1>stap te zetten.</h1>
                        <h5>Met GrowLab</h5>
                        <div className="header_buttons">
                            <button id="aanmelden" className="sec_button_header">Aanmelden</button>
                            <button id="registeren" className="pri_button_header">Registeren</button>
                        </div>
                    </div>
                    <img className="img_header" src={imgHeader} alt="header_img" />
                </header>
                <body>
                    <h2>Succesverhalen</h2>
                    <div>
                    </div>
                </body>
        </>
    );
}