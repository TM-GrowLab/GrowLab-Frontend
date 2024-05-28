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
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        let hour = date.getHours();
        let minute = date.getMinutes();
        return `${month}/${day}/${year} ${hour}:${minute}`;
    };

    return (
        <div className="sessionCard boxShadow" onClick={handleOnClick}>
            <h4 className="cardTitle">{Title}</h4>
            <p className="cardDescription">{Description}</p>
            <p className="cardDate">{displayDate()}</p>
        </div>
    );
}