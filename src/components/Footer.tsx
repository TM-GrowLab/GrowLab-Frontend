import logoGrowLab from "../images/LogoGrowLab.png";

export const Footer = () => {

    return (
        <>
        <div className="footer_container light">
                    <section className="rights_block">
                        <p className="rights">
                        © 2024 GrowLab. Alle rechten voorbehouden. GrowLab is een dynamische gemeenschap die gedreven wordt door connecties, leren en waardevolle klantrelaties. Samen bouwen we aan de toekomst van digitale ondernemingen.
                        </p>
                    </section>
                    <section className="footer_nav">
                        <div>
                            <ul>
                                <li>GrowLab</li>
                                <li>Jeroen Roelant</li>
                                <li>Marlène Braem</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Over</li>
                                <li>Terms & services</li>
                                <li>Legal</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="">Community</a></li>
                                <li><a href="">Learning</a></li>
                                <li><a href="">Klanten</a></li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <img className="mini_logo" src={logoGrowLab} alt="Logo" />
                    </section>
            </div>
        </>
    );
}