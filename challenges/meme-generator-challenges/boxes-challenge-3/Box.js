import React from "react";

export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles}
            className="box"

            // to prevent the parameters being the event itself, 
            // add another function 
            onClick={() => props.toggle(props.id) }
        >
            box
        </div>
    )
}
