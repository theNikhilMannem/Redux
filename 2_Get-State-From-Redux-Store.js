/*

The Redux store object provides several methods that allow you to interact with it.
For example, you can retrieve the current state held in the Redux store object with the getState() method.

*/


// Assigning the store constant the createStore() method of Redux.
const store = Redux.createStore(
  (state = 5) => state
);

// Assigning the currentState variable the getState() method value of the 'store': it is the current state of the store.
let currentState = store.getState();

// Printing the currentState out in the log.
console.log(currentState);
