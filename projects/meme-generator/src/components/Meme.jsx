import memesData from "../memesData.js"
import { useState } from 'react';

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)
    
    function getRandomMemeImage() {
        const memes = allMemeImages.data.memes;
        const randIdx = Math.floor(Math.random() * memes.length)
        const imageUrl = memes[randIdx].url
        
        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                randomImage: imageUrl
            }
        })
    }

    function handleChange(e) {
        const {name, value} = e.target

        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                [name]: value
            }
        })
    }
    
    return (
        <main>
            <div className="form">
                <label className="form__text-label" >
                    <p>Top Text</p>
                    <input 
                        type="text" 
                        className="form__input-text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>
                <label className="form__text-label">
                    <p>Bottom Text</p>
                    <input 
                        type="text" 
                        className="form__input-text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button 
                    className="form__submit-btn" 
                    onClick={getRandomMemeImage}
                >
                    Get a new meme image 🖼️
                </button>

            </div>
            <div className="image">
                <img src={meme.randomImage} alt="meme image" className="image__meme" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}