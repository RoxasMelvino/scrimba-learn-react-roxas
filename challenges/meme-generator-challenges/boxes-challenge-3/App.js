import React from "react"
import boxesData from "./boxes.js"
import Box from "./Box.js"


export default function App(props) {

    const [boxes, setBoxes] = React.useState(boxesData)

    function toggle(id) {
        setBoxes(prevState => {
            // if it works, it works
            // let newState = [...prevState];

            // for (let i = 0; i < newState.length; i++) {
            //     if (newState[i].id === id) {
            //         newState[i].on = !newState[i].on
            //     }
            // }
            
            // return newState;
            
            // this works but it still directly mutates the previous state?
            // for (let i = 0; i < prevState.length; i++) {
            //     if (prevState[i].id === id) {
            //         prevState[i].on = !prevState[i].on 
            //     }
            // }

            // return [...prevState]

            // this is a way better version
            return prevState.map((box) => {
                return box.id === id ? {...box, on: !box.on} : box
            })
        })
    }
    
    const boxElements = boxes.map(box => ( 
        <Box 
            on={box.on} 
            id={box.id}
            key={box.id} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
            {console.log(boxes)}
        </main>
    )
}
