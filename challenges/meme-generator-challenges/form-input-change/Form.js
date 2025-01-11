import React, { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    console.log(formData);
    
    function handleChange(event) {
        setFormData(prevData => {
            return {
                ...prevData,
                
                // this syntax is known as COMPUTED PROPERTIES, which was introduced in ES6
                // Instead of hardcoding property names, 
                // it allows us to have DYNAMIC property names!
                // simply surround the property name with square brackets 
                // in this case, event.target.name: event.target.value will result in an error,
                // so we need square brackets around the property name ! 
                // Also, make sure the name of the input is the same as the initial state value!
                [event.target.name]: event.target.value
            }
        })
    } 

    return (
        <form>
            <input 
                type="text" 
                placeholder="First Name"
                onChange={handleChange}
                name="firstName" // have the name property the same name as the property!
                value={formData.firstName}
            />
            <input 
                type="text" 
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"

                // set the value of your inputs to be equal to your state!
                // this is something called controlled inputs
                // this is very vague, but just know you need to do this!
                // if you want to try and conceptualize it, think back to the boxes challenge 
                // where we set each box its own state. We eventually moved that state up to the parent,
                // which holds each box, and then passed the data from the parent to each box via props
                // we did this so there was one state updated instead of multiple ones!
                value={formData.lastName}
            />
            <input 
                type="text" 
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
        </form>
    )
}
