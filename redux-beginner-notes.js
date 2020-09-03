// Action - JS object that describes something that happened in the application
const addTodoAction = {
  type: 'todos/todoAdded', // domain/eventName
  payload: 'Buy milk', // additional information about waht happend
};

// Action creator - creates and returns an action object
const addTodo = (text) => {
  return {
    type: 'todos/todoAdded',
    payload: text,
  };
};

// Reducer - a function that receives the current state and an action object, updates the state, and returns new state
// - only calculate new state based on the state and action arguments - no outside effects
// - not allowed to modify existing state. must create copy of existing state and make changes to that
// - no asynchronous logic, random values, or other 'side effects'
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // if so, make a copy of state
    return {
      ...state,
      // and update the copy with the incremented value in state
      value: state.value + 1,
    };
  }
  //otherwise, return original state unchanged
  return state;
}

// Store - where the current redux application state lives
// created by passing in a reducer, and has a method called getState that returns the current state value
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: counterReducer });

console.log(store.getState());
// {value: 0}

// Dispatch - the only way to update the state is to call store.dispatch() and pass an action object
store.dispatch({ type: 'counter/increment' });

console.log(store.getState());

// Dispatchinga ctions 'trigger an event'
// Reducers act like event listeners, and when they hear an action they are interested in, they update the state
// We typically call action creators to dispatch the right action

const increment = () => {
  return {
    type: 'counter/increment',
  };
};

store.disaptch(increment());

console.log(store.getState());
// value: 2

// Selectors - functions that know how to extract specific pieces of information from a store state value
const selectCounterValue = (state) => state.value;

const currentValue = selectCounterValue(store.getState());
console.log(currentValue);
// 2

// * Redux Application Data Flow
// - State describes the condition of the app at a specific point in time
// - The UI is rendered based on taht state
// - When something happens, the state is updated based on what occured
// - The UI re-renders based on the new state

// * Redux specifically
// ! Initial Setup
// - Redux store created using root reducer function
// - Store calls the root reducer once, and saves the return value as initial state
// - When UI is first rendered, uses store state to decide what to render. Listens for future store updates

// ! Updates
// Something happens in app
// The app code dispatches an action to the redux store, like dispatch({ type: 'counter/increment'})
// The store runs the reducer function with the previous state and currrent action. Saves return value as new state
// The store notifies all parts of UI that are subscribed
// Each UI componnet taht needs data from the store checks to see if the parts ot the state they need hava changed
// Each component that sees its data has changed forces a re-render with the new data, so it can update whats shown on screen
