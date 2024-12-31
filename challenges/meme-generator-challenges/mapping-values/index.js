import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function App() {

    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    
    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
    
    function addNewThing() {
        // this will NOT work 
        // this will change the whole state to just the number 3
        // this is STILL CHANGING THE STATE DIRECTLY
        // setThingsArray(prevThings => prevThings.push()) 

        // since we are mapping the things inside of this array,
        // it needs to be an array, NOT A NUMBER, which we can do like so...
        // here, we are utilizing the spread operator thanks to ES6
        setThingsArray(prevThings => [...prevThings, `Thing ${prevThings.length + 1}`]) 
    }
    
    const thingElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            {thingElements}
            <button onClick={addNewThing}>Add Item</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));