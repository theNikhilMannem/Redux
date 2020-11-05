/*

A Redux action is simply a JavaScript object that contains information about an action event that has occurred.
The Redux store receives these action objects, then updates its state accordingly.

Actions must carry a type property that specifies the 'type' of action that occurred (while data like 'username' when user logs in is optional).

*/



// A Redux action with a type property.
const action = {
    type: "LOGIN"
};

// Logging the 'action'.
console.log(action);
