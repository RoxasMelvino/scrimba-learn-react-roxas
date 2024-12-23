import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingyThing = thingsArray.map(thing => <p key={thing}>{thing}</p>)  

    function addNewThing() {
        thingsArray.push(`Thing ${thingsArray.length + 1}`)
        console.log(thingsArray);
    }

    return (
        <div>
            {thingyThing}
            <button onClick={addNewThing}>Add Item</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));