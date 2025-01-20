import React, { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    function handleChange(event) {
        
        setFormData(prevData => {

            const {name, value, type, checked} = event.target
            return {
                ...prevData,
                
                // this syntax is known as COMPUTED PROPERTIES, which was introduced in ES6
                // Instead of hardcoding property names, 
                // it allows us to have DYNAMIC property names!
                // simply surround the property name with square brackets 
                // in this case, event.target.name: event.target.value will result in an error,
                // so we need square brackets around the property name ! 
                // Also, make sure the name of the input is the same as the initial state value!
                [name]: type === "checkbox" ? checked : value
            }
        })
    } 

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
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

            <textarea 
                placeholder="Comments"
                value={formData.comments}
                onChange={handleChange}
                name="comments"
            />

            <input 
                type="checkbox" 
                id="isFriendly"
                name="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>

                {/* notice how each element have the same name
                this is so we cannot check all the radio buttons at once.
                This is default HTML behavior, not React.  */}
                <legend>Current employment status</legend>

                <input 
                    type="radio" 
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}

                    // similar to a checkbox, we can make React control our radio inputs  
                    // rather than them having its own HTML state. 
                    // it's `formData.employment === 'unemployed'` so we can make it a boolean 
                    checked={formData.employment === 'unemployed'}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input 
                    type="radio" 
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === 'part-time'}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input 
                    type="radio" 
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employment === 'full-time'}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"

                // just like our inputs, we need to mirror what we have in state here
                value={formData.favColor} 
                onChange={handleChange}
                name="favColor"
            >
                {/* we need to reprsent the empty string value here  */}
                <option value="">-- Choose a color --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}
