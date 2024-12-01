import starIcon from "/assets/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`/assets/${props.img}`} alt="photo of a person" className="card__photo"/>
            <div className='card__stats'>
                <img src={starIcon} alt="star icon" className="card__star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><strong>{`From $${props.price}`}</strong> / person</p>
        </div>
    )
}