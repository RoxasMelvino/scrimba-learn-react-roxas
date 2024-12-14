import pin from "/public/pin.png"


export default function Journal(props) {
    
    return (
        <article className="journal__article">
            <img src={props.imageUrl} alt="Photo of the place" className="article__img"/>
            <header>
                <div className="header__location-info">
                    <p className="header__location"><img src={pin} alt="pin location marker" className="header__div-pin"/> {props.location.toUpperCase()} </p>
                    <a href={props.googleMapsUrl} className="header__link">View on Google Maps</a>
                </div>
                <h1 className="header__title">{props.title}</h1>
                <p><strong>{props.startDate} - {props.endDate}</strong></p>
                <p>{props.description}</p>
            </header>
        </article>
    )
}