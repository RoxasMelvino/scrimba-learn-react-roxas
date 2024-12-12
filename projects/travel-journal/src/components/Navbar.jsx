import globe from "/public/globe.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={globe} alt="image of a globe" className="navbar__icon"/>
            <p>my travel journal.</p>
        </nav>
    )
}