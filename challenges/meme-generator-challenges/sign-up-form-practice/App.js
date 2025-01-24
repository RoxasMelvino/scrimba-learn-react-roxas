import React from "react"
import { useState } from "react";

export default function App() {
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        isOkayToJoin: false
    })

    console.log(formData);
    
    function handleChange(event) {
        setFormData(prevData => {

            const {name, type, value, checked} = event.target
            if (checked) console.log('Thanks for signing up for our newsletter!');

            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()

        const isPasswordValid = formData.password === formData.confirmPassword;
        console.log(isPasswordValid ? "Successfuly logged in" : "Passwords do not match");
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.isOkayToJoin}
                        name="isOkayToJoin"
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
