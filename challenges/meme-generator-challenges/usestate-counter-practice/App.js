import React from "react"

export default function App() {

    const [count, setCount] = React.useState(0);
    console.log(count);

    function increment() {
        setCount(function(prevCount) {
            return prevCount + 1;
        });
    }

    function decrement() {
        setCount(prevCount => prevCount - 1);
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={decrement}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={increment}>+</button>
            {/* <button className="counter--plus" onClick={() => setCount(prevCount => prevCount + 1)}>+</button> */}
        </div>
    )
}
