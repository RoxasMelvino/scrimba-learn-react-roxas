import memesData from "../memesData.js"
import { useState } from 'react';

export default function Meme() {
    const memes = memesData.data.memes;
    const [image, setImage] = useState('');

    function getRandomImage() {
        const randIdx = Math.floor(Math.random() * memes.length)
        const url = memes[randIdx].url
        setImage(url);
    }

    
    return (
        <main>
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
            <div className="image">
                <img src={image} alt="meme image" className="image__meme" />
            </div>
        </main>
    )
}