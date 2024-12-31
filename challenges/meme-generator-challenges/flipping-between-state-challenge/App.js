import React from "react"
import { useState } from 'react';

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    const [isGoingOut, setIsGoingOut] = useState(true);

    function toggleIsGoingOut() {
        // setIsGoingOut(prevStat => prevStat ? false : true) 
        setIsGoingOut(prevStat => !prevStat)
    }
    
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <button className="state--value" onClick={toggleIsGoingOut}>
                <h2>{isGoingOut ? "Yes" : "No"}</h2>
            </button>
        </div>
    )
}
