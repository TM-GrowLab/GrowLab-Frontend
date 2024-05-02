
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";

export const AanmeldGegevens = () => {

    return (
        <>
            <div className="container">
                <NavBar />
                <section className="register_container">
                    <div>
                        <div className="title_box">
                            <h1 className="bold_h1 register_title">Welkom bij GrowLab</h1>
                            <h3>Vooruitgang: 1/4</h3>
                        </div>
                        <p className="info">Nieuw hier? Dan ben je op de juiste plaats! Op deze pagina kan je een account aanmaken door het volgende stappenplan te volgen.</p>
                    </div>
                    <div>
                        <h2>Jouw aanmeldgegevens</h2>
                        <div>
                            <input type="text" placeholder="e-mail" />
                            <input type="text" placeholder="bevestig e-mail" />
                            <input type="text" placeholder="paswoord"/>
                            <input type="text" placeholder="bevestig paswoord"/>
                        </div>
                    </div>
                    <div>
                        <h3>of</h3>
                        <p>Je kan gebruik maken van een ander account om je aan te melden op GrowLab.</p>
                    </div>
                    <div>
                        <a className="knop_grijs">Registeren met <em className="elza_16_bold">Microsoft</em></a>
                        <a className="knop_grijs">Registeren met <em className="elza_16_bold">Google</em></a>
                        <a className="knop_grijs">Registeren met <em className="elza_16_bold">LinkedIn</em></a>
                        <a className="knop_grijs">Registeren met <em className="elza_16_bold">Facebook</em></a>
                    </div>
                    <div>
                        <button className="gradient_button">Volgende</button>
                    </div>
                </section>
            <Footer />
            </div>
        </>
    );
}