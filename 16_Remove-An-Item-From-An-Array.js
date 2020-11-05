/*

Just like that, the spread operator can be used better on arrays.
Other useful JavaScript methods include slice() and concat(), which also return a new array containing the selected elements that are passed to them.

The example below builds the reducer so a new state array is returned with the item at the specific index removed.

*/



const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Returning a new array, removing the item at a given index.
      return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
