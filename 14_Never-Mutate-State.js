/*

Enforcing the key principle of state immutability in Redux: Immutable state means that you never modify state directly, instead, you return a new copy of state.
Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the programmer.
Fortunately, JavaScript (especially ES6) provides several useful tools you can use to enforce the immutability of your state.
In practice, your state will probably consist of an array or object, as these are useful data structures for representing many types of information.

*/



const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

// Returning the state without mutating it in any way: concat() returns a new array instead of mutating the original one.
const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // return state
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
