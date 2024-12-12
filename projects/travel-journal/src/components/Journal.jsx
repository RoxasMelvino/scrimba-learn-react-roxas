import pin from "/public/pin.png"


export default function Journal(props) {

    // console.log(props);
    
    return (
        <article className="journal__article">
            <img src="https://picsum.photos/id/237/200/300" alt="Photo of the place" className="article__img"/>
            <header>
                <div className="header__div--flex">
                    <img src={pin} alt="pin location marker"/>
                    <p>Location</p>
                    <a href="linkhere">View on Google Maps</a>
                </div>
                <h1>Title</h1>
                <p><strong>StartDate - EndDate</strong></p>
                <p>Description</p>
            </header>
        </article>
    )
}