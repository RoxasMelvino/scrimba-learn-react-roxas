import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(['a', 'b'])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
    return (
        <div>
            {/* {
                messages.length === 0 && 
                <h1>You're all caught up!</h1>
            }
            {
                messages.length > 0 && 
                <h1>You have {messages.length} unread {messages.length > 1 ? "messages": "message"}</h1>
            } */}

            {/* or... */}

            {
                messages.length === 0 ? 
                <h1>You're all caught up!</h1> : 
                <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
            }
        </div>
    )
}
