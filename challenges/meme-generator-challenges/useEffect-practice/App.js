import React, { useState, useEffect } from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = useState({});
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('Effect has been run');
    }, [count])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Add</button>
        </div>
    )
}
