import React from "react";

export default function Star(props) {

    let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

    console.log(props.isFilled, starIcon);

    return (
        // Here, <button> is a DOM element, so onClick WILL 
        // be a functional event listener
        <button 
            className="card__favorite-button"
            onClick={props.handleClick}

            // our button does not have text inside (only an image in this case) so, 
            // for best practice, we should use an aria-label attribute
            // to describe what this button does 
            aria-label={props.isFilled ? "Unmark as favorite" : "Mark as favorite"}

            // our button is essentially toggles on or off
            // so we can indicate to a screen reader whether
            // or not it is currently pressed.
            aria-pressed={props.isFilled} 
            //we use aria attributes when there is not enough 
            // semantic information for assistive technology
            // like screen readers
        >
            <img 
                src={`./images/${starIcon}`} 
                className="card--favorite"
                alt="star icon"
            />
        </button>
        // we are wrapping this img into a button element for accessibility
        // this is so the user is able to "tab" over to the Star Icon
        // without having to use the keyboard. 
    )
}