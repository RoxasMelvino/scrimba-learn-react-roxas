import trollFace from "/public/troll-face.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={trollFace} alt="troll face icon" className="navbar__troll-face" />
            <h1>Meme Generator</h1>
        </nav>
    )
}