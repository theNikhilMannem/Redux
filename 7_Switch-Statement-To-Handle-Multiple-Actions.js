/*

You can tell the Redux store how to handle multiple action types.
Say you are managing user authentication in your Redux store. You want to have a state representation for when users are logged in and when they are logged out.
You represent this with a single state object with the property authenticated.
You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.

*/


// The default state.
const defaultState = {
  authenticated: false
};

// The reducer function.
const authReducer = (state = defaultState, action) => {
  // Switch statement to switch between the action.type values (here, boolean).
  switch (action.type) {
    case 'LOGIN':
      return {
        authenticated: true
      };
    case 'LOGOUT':
      return {
        authenticated: false
      };
    default:
       return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
