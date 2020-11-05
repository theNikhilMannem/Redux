/*

One solution from ES6 to help enforce state immutability in Redux is the spread operator: '...'.
Syntax: let newArray = [...myArray];
> newArray is now a clone of myArray. Both arrays still exist separately in memory. If you perform a mutation like newArray.push(5), myArray doesn't change.
> To clone an array but add additional values in the new array, you could write [...myArray, 'new value'].

*/



const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Returning the state appended with the 'todo' value from the action, using spread operator.
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
