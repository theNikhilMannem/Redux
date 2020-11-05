/*

After an action is created and dispatched, the Redux store needs to know how to respond to that action.
This is the job of a reducer function.
Reducers in Redux are responsible for the state modifications that take place in response to actions.
A reducer takes state and action as arguments, and it always returns a new state.

*/



const defaultState = {
  login: false
};

// Returning in the reducer function, login as true, if action.type is 'LOGIN', else false.
const reducer = (state = defaultState, action) => {
  if (action.type === 'LOGIN') {
    return {
      login: true
    };
  }
  return state;
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
