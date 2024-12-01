1. What do props help us accomplish?
- Properties (props for short) help us accomplish composability, meaning we are able to pass data in an efficient way and make a component more reuasable
- Props make our data dynamic. We can leave it in the background and that data can change.  


2. How do you pass a prop into a component?
- We can pass a prop in a component by adding attributes (mostly called props) inside of the component when we are invoking it. Like an HTML attribute. 



3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
- I believe you can, however, it will be useless and you cannot manipulate it. 
Correct answer: No, becuaes the JSX we use to describe Native DOM elements will be turned into REAL DOM elements by React. And real DOM elements only have the properties/attributes specified in the HTML specification.

4. How do I receive props in a component?
pass in a parameter on your component. It can be named whatever you want, but 'props' is the convention.
function Navbar(props) { 
    console.log(props)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
props is a JavaScript Object when the component receives it. We can manipulate that data by using dot notation or square brackets. 