import React from "react"

export default function Header(props) {
 
    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}
