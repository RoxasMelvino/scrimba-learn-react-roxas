import React from "react"

// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// recall that we can destructure objects using ES6 syntax
// const {img, name} = user;
// the name of the variables MUST correspond to the property names of the object
// otherwise it will not work

// if you want to change the the name of the property:
// grab the name of the property followed by a colon, and then put
//the variable name you want.
// const {img: userImage, name: userName} = user;


// we can immediately destructure the props object when we pass it in
// however, we need to make sure the names must match the name of the properties
export default function Contact({img, name, phone, email}) { 
    // when we're destructuring the prop, we are essentially declaring
    // new variables (four in this case)

    // or..
    // const {img, name, phone, email} = props; 
    // or just use props.propertyName
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}
