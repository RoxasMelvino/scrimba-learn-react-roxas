1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

   In a state setter function, you can directly pass a value (either the previous or some new value), or you pass in a callback function 
   where the parameters of said function is the previous value of the state. 


2. When would you want to pass the first option (from answer
   above) to the state setter function?

   The first option is when you want to directly and instantly change the state where you don't really need to use the previous state. 


3. When would you want to pass the second option (from answer
   above) to the state setter function?

   You want want to use the second option if you need the previous state in order to determine a new state. 
   This is done by passing a callback function into our state setter function. The parameter of the callback function will be the 
   previous state. 