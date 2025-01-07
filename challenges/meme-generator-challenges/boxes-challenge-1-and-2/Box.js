import React from "react";

export default function Box(props) {

    // each box will have its own state, which is known as 
    // a derived state, but is no longer recommended and far less common. 
    // Recall that the array of objects is being governed by the `App` component 
    // and that data is passed to child components via props,
    // and when we flip the true or false value of these boxes by clicking on them,
    // it is only making local changes to that state, not the value of where the original state is. 

    // With that being said, instead of giving each box a state, 
    // we are going to use the state that already exists within our `App` Component (see boxes challenge part 3). 
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
