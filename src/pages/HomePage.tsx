import imgHeader from "../images/Header_img.png";
import { NavBarVisitor } from "../components/NavBarVisitor";
import { Succesverhaal } from "../components/HomePage/Succesverhaal";
import { useState } from "react";
import LogIn from "../components/LogIn";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {

    const navigate = useNavigate()

    const navigateToAanmeldGegevens = () => {
        navigate('/aanmeldgegevens')
    }

    const navigateToLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <div className="container">
                <header>
                    <div className="card_header">
                        <h1> <em className="bold">Durf</em> de volgende</h1>
                        <h1>stap te zetten.</h1>
                        <h5>Met GrowLab</h5>
                        <div className="header_buttons">
                            <button id="aanmelden" className="sec_button_header" onClick={navigateToLogin}>Aanmelden</button>
                            <button id="registeren" className="pri_button_header" onClick={navigateToAanmeldGegevens} >Registeren</button>
                        </div>
                    </div>
                    <img className="img_header" src={imgHeader} alt="header_img" />
                </header>
                <section>
                    <h2>Succesverhalen</h2>
                    <div className="scroll_container">
                        <Succesverhaal 
                        bedrijf="PixelVortex" 
                        beschrijving="GrowLab gaf me een team, wij maakten er een familie van." 
                        />
                         <Succesverhaal 
                        bedrijf="Digital Capybara" 
                        beschrijving="GrowLab gaf me de tools, ik maakte er een succes van." 
                        />
                         <Succesverhaal 
                        bedrijf="NB Media" 
                        beschrijving="Zonder GrowLab was ik nooit zo ver gekomen." 
                        />
                         <Succesverhaal 
                        bedrijf="The Digital Agency" 
                        beschrijving="Als je wilt groeien, moet je bij GrowLab zijn." 
                        />
                    </div>
                </section>
                <section className="card_container">
                    {/* <div className="card_header">
                        <h3>Over GrowLab</h3>
                        <p>Bij GrowLab draait alles om het bouwen van waardevolle verbindingen in de digitale wereld. Of je nu een ambitieuze start-up bent, een doorgewinterde mentor, of een klant op zoek naar innovatieve oplossingen, wij zijn er om jouw groeireis te ondersteunen. We geloven in de kracht van community, leren en het creëren van eerlijke kansen voor iedereen. Ontdek bij GrowLab een levendige omgeving waar ideeën gedijen, kennis wordt gedeeld, en duurzame zakelijke relaties worden gesmeed. Doe mee, leer, en groei met GrowLab! 🚀</p>
                        <div className="header_buttons">
                            <button id="aanmelden" className="sec_button">Aanmelden</button>
                            <button id="registeren" className="pri_button">Registeren</button>
                        </div> 
                    </div>
                    <div className="card_header">
                        <h3>Onze waarden</h3>
                        <p>
                            GrowLab is gebouwd op 3 waarden: Community, Learning en Klanten. Community staat voor de connecties die we bouwen tussen gelijkgezinde digital creatives. Learning is de kennis die onze ervaren leden delen met de jonge starters. We bouwen bruggen naar externe klanten om beide partijen eerlijke kansen te geven. We geloven dat door het versterken van de Community, het delen van Lessons learned, en het faciliteren van waardevolle connecties met Klanten, we niet alleen individuele ondernemers ondersteunen, maar ook bijdragen aan een veerkrachtig en innovatief ecosysteem voor digitale ondernemingen.
                        </p>
                        <div className="waarden">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div> */}
                </section>
            </div>
            <Footer />
        </>
    );

}