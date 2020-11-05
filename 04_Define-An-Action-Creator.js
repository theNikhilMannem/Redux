/*

After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this.
An action creator is simply a JavaScript function that returns an action.
In other words, action creators create objects that represent action events.

*/


// A Redux action.
const action = {
  type: 'LOGIN'
}

// An action creator.
function actionCreator() {
  return action;
}
