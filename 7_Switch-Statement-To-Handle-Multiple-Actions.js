/*



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
