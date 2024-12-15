export default function Meme() {
    return (
        <form className="form">
            <label className="form__text-label" >
                <p>Top Text</p>
                <input type="text" className="form__input-text"required/>
            </label>
            <label className="form__text-label">
                <p>Bottom Text</p>
                <input type="text" className="form__input-text"required/>
            </label>
            <button type="submit" className="form__submit-btn">Get a new meme image 🖼️</button>
        </form>
    )
}