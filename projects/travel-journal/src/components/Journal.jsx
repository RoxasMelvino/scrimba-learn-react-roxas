import pin from "/public/pin.png"


export default function Journal(props) {
    
    return (
        <article className="journal__article">
            <img src={``} alt="Photo of the place" className="article__img"/>
            <header>
                <div className="header__div--flex">
                    <p className="header__location"><img src={pin} alt="pin location marker" className="header__div-pin"/> LOCATION </p>
                    <a href="linkhere" className="header__link">View on Google Maps</a>
                </div>
                <h1>Title</h1>
                <p><strong>StartDate - EndDate</strong></p>
                <p>Description</p>
            </header>
        </article>
    )
}