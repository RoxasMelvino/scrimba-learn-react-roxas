1. How would you describe the concept of "state"?
    Updated variables, values, etc., aren't immediately rendered into our UI. React's state makes it easier to render changing values into our UI. Whereas in JavaScript, we would have to grab the element using the DOM and update its value. 

    Intructor's definition: 
    State refers to values that a component can maintain between render cycles. 
    A way for React to remember saved values from within a component
    This is similar to declaring variables from within a component with a few added bonuses. 

2. When would you want to use props instead of state?
    We want to use props instead of state when we do not have changing values (static values), like grabbing data from an API and passing those props. So anytime we want to pass data. 


3. When would you want to use state instead of props?
    We want to use state instead of props when we have changing or updating values so that we can render that to our UI. 

    Instructor's definition: 
    Anytime you want a component to maintain some values from within the component. (And "remember" those values even when React re-renders the component)

4. What does "immutable" mean? Are props immutable? Is state immutable?

    Immutable means unchangeable. State is mutable. I believe props are immutable, but you should NOT change them when directly accessing them in your component (what is the point of even having props when you do so, anyway?).
