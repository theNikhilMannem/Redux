/*

Object.assign() takes a target object and source objects and maps properties from the source objects to the target object.
Any matching properties are overwritten by properties in the source objects.
This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy.

*/



const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Returning a new object, copying the state and a property to an empty object:
      // the way Object.assign() works, the properties of the 'state' are copied to the empty object, and the '{ status: online }' is an object that's also copied into the empty object but overwrites any matching properties,
      // i.e., the 'status' (with value as 'offline') property which is already copied from 'state' will be overwritten by this property (with value as 'online').
      return Object.assign({ }, state, { status: 'online' });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
