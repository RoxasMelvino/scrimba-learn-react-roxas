import React from "react";

export default function Contact(props) { // we can all props whatever we want basically...
    console.log(props);
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

// return (
//     <div className="contact-card">
//         <img src="./images/mr-whiskerson.png"/>
//         <h3>Mr. Whiskerson</h3>
//         <div className="info-group">
//             <img src="./images/phone-icon.png" />
//             <p>(212) 555-1234</p>
//         </div>
//         <div className="info-group">
//             <img src="./images/mail-icon.png" />
//             <p>mr.whiskaz@catnap.meow</p>
//         </div>
//     </div>
// )

// THIS IS NOT GOOD BECAUSE... 
// THE DATA HERE IS HARD CODED
// THUS, IT WILL NOT CHANGE 
// WE WILL GET THE SAME THING OVER AGAIN WHEN WE INSTANTIATE THIS COMPONENT


// ITS LIKE THIS USELESS FUNCTION BELOW WITH NO COMPOSABILITY
function addTwoNumsTogether(a, b) {
    return 1 + 5;
}

  