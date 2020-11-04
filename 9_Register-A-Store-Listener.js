/*

Another method you have access to on the Redux store object is store.subscribe().
This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store.
One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.

*/



const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable.
let count = 0;

// Subscribing the listener functions to the store, and incrementing the count by 1 for each each dispatch().
store.subscribe(() => ++count);

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
