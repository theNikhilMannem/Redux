/*

dispatch method is what you use to dispatch actions to the Redux store.
Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.

*/



const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatching the action.
store.dispatch(loginAction());
