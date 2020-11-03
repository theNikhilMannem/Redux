/*

Create A Redux Store: Using the Redux object's createStore() method.

The Redux store is an object which holds and manages application state.
There is a method called createStore() on the Redux object, which you use to create the Redux store.
This method takes a reducer function as a required argument:  it simply takes state as an argument and returns state.

*/



const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
let store = Redux.createStore(reducer);
