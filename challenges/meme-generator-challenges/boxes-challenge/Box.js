import React from "react";

export default function Box(props) {

    // each box wil have its own state. 
    const [isOn, setIsOn] = React.useState(props.on) 

    const styles = {
        backgroundColor: isOn ? "#222222" : "transparent"
    }
    
    function toggle() {
        setIsOn(prevState => !prevState)
    }
    
    return (
        <div 
            style={styles}
            className="box"
            onClick={toggle}
        >
            box
        </div>
    )
}
