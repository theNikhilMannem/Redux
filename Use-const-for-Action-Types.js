/*

A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used.
You can refactor the code you're working with to write the action types as const declarations.

*/


// const declarations of the action types.
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

// Referring the const declarations of the LOGIN and LOGOUT instead of their string equals in the reducer function.
const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

// Referring the const declarations of the LOGIN and LOGOUT instead of their string equals in the action creators.
const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
