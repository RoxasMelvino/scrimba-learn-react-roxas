import memesData from "../memesData.js"
import { useState } from 'react';

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */ 
    
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
                <button className="form__submit-btn" onClick={getRandomMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <div className="image">
                <img src={meme.randomImage} alt="meme image" className="image__meme" />
            </div>
        </main>
    )
}