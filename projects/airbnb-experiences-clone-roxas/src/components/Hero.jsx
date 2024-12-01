import photoGrid from "/assets/photo-grid.png"

export default function() {
    return (
        <section className="hero">
            <img src={photoGrid} alt="amazing" className="hero__image"/>
            <h1 className="hero__h1">Online Experiences</h1>
            <p className="hero__text">
                Join unique interactive activities 
                led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}