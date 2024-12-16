import memesData from "../memesData.js"

export default function Meme() {
    const memes = memesData.data.memes

    function getRandomImage() {
        const randIdx = Math.floor(Math.random() * memes.length) + 1
        const url = memes[randIdx].url
    }

    
    return (
        <div className="form">
            <label className="form__text-label" >
                <p>Top Text</p>
                <input type="text" className="form__input-text"required/>
            </label>
            <label className="form__text-label">
                <p>Bottom Text</p>
                <input type="text" className="form__input-text"required/>
            </label>
            <button className="form__submit-btn" onClick={getRandomImage}>Get a new meme image 🖼️</button>
        </div>
    )
}