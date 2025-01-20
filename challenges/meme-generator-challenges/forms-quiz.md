1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
   
   When you submit a form in vanilla JS, you can gather all the data right before the data is submitted



2. In a React app, when do you gather all the data from
   the filled-out form?

    When going through a form in React, every change, keystroke, etc., is tracked and put into state. 
    To gather all the data, simply just use the state.

3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
   
    The name attribute in the form elements should match the property name being held in state for that input

4. What's different about a saving the data from a checkbox element
   vs. other form elements?

    A checkbox element, when checked, returns a boolean value. This makes it different from the other elements because
    we cannot just assign it an empty string in our state. When updating our state, we need to check if it is of type checkbox. And for other elements, we have been using the `value` property for it to mirror our state. However, for a checkbox, it will use the `checked` property to do so. 


5. How do you watch for a form submit? How can you trigger
   a form submit?

   To watch for a form submit, you can simply place a button element INSIDE of a form. 
   Pressing this button will trigger the forms `onsubmit` event handler.  