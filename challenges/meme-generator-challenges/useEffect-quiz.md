1. What is a "side effect" in React? What are some examples?
 A side effect in React is something that is outside of React's reach, like APIs localStorage, and anything that React is not in charge of. We have mentioned React's primary/innate tasks, like working with the DOM, managing the state between render cycles, and keeping the UI in sync whenever state changes occur. 


2. What is NOT a "side effect" in React? Examples?
In React, state is NOT a side effect. It innately part of React's ecosystem and is controlled by it. Basically, anything that React is in charge of. 


3. When does React run your useEffect function? When does it NOT run
   the effect function?
   
 As soon as the component loads (the first render)
React runs the useEffect function if the values in the dependencies array differ from the previous render. In other words, if the values change in the array, run, otherwise do not. So, if you hardcode a value or leave the array empty, then the effect will only run once. 

4. How would you explain what the "dependecies array" is?
The dependencies array parameter allows us to, essentially, "control" React's primitive behavior to rendering things.  

