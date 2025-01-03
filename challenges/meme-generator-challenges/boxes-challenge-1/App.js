import React from "react"
import boxesData from "./boxes.js"
import Box from "./Box.js"


export default function App(props) {

    const [boxes, setBoxes] = React.useState(boxesData)
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    
    const styles = {
        // when we are adding styles into our elements,
        // it needs to be a JavaScript Object!
        // css styling needs to be camelCased!
        // this is better than CSS because our styles can be DYNAMIC.
        // this is essentially similar to this: 
        // document.getElementById("something").style.backgroundColor = "red"
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    const boxElements = boxes.map(box => ( // using () instead of {}. This is called implicit return so you don't have to use the return value. 
        // <div style={styles} key={box.id} className="box">box</div>
        <Box on={box.on} key={box.id} />
    ))
    
    return (
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}
