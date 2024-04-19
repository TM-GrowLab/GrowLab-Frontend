
interface SuccesverhaalProps {
    bedrijf: string;
    beschrijving: string;
}

export const Succesverhaal = ({bedrijf, beschrijving}:SuccesverhaalProps) => {

    return (
        <>
                    <div className="succesverhaal">
                        <h2>{bedrijf}</h2>
                        <h4>{beschrijving}</h4>
                    </div>
        </>
    );
}