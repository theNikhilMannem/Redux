/*

You can also send specific data along with your actions.
Actions usually originate from some user interaction and tend to carry some data with them. The Redux store often needs to know about this data.

*/



const ADD_NOTE = 'ADD_NOTE';

// Returning the data from the 'text' property of the addNoteText action creator of type 'ADD_NOTE'.
const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
      return action.text;
    default:
      return state;
  }
};

// Adding an extra key 'text' for some data.
const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note
  }
};

// Creating the Redux store.
const store = Redux.createStore(notesReducer);

// Logging the state of the store before and after calling the addNoteText() action creator.
console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
