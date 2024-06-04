interface SessionCardProps {
    Title: string;
    Description: string;
    sDate: Date;
    URL: string;
}

export const SessionCard: React.FC<SessionCardProps>  = ({
    Title,
    Description,
    sDate,
    URL
}) => {

    const handleOnClick = () => {
        window.open(URL, '_blank');
    };

    let date = new Date(sDate);
    let displayDate = () => {
        return date.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
    };

    return (
        <div className="sessionCard boxShadow" onClick={handleOnClick}>
            <h4 className="cardTitle">{Title}</h4>
            <p className="cardDescription">{Description}</p>
            <p className="cardDate">{displayDate()}</p>
        </div>
    );
}