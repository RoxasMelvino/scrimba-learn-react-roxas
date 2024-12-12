// the import below works because the "root" is the public folder
import starIcon from "/assets/star.png"

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            
            {badgeText && <div className="card__badge">{badgeText}</div>}
            <img src={`/assets/${props.coverImg}`} alt="photo of a person" className="card__photo"/>
            <div className='card__stats'>
                <img src={starIcon} alt="star icon" className="card__star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p><strong>{`From $${props.price}`}</strong> / person</p>
        </div>
    )
}