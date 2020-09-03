import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export default configureStore(
  // All the reducer functions are passed into configureStore in an object
  {
    reducer: {
      counter: counterReducer,
      // {counter: counterReducer } says we want to have a state.counter section
      // of our Redux state object, asn we watnt he counterReducer function to be
      // in charge of deciding if and how to update the state.counter section
      // whenever an action is dispatched
      // * Each collection of redux reducer logic and actions for a feature is called a 'slice'
      // ! etc: counter: counterReducer
    },
  }
);
