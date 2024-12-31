import React from "react"

export default function App() {
    /**
     * Challenge1 : Replace the if/else below with a ternary
     * to determine the text that should display on the page
     * 
     * Challenge2: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */

    const isGoingOut = true
    
    // let answer 
    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }

    // let answer = isGoingOut ? "Yes" : "No"; // conditional assignment
    // console.log(answer);
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut ? "Yes": "No"}</h1>
            </div>
        </div>
    )
}
