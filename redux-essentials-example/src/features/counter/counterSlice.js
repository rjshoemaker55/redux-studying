import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  // The 'name' string defines the first part in our type definitions (counter/increment)
  name: 'counter',
  // createSlice needs initialState passed in - this case: value with initial value of 0.
  initialState: {
    value: 0,
  },
  reducers: {
    // The name of each reducer defines the second part in our type definitions
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // createSlice automatically generates action creators with the same names as the reducers
    // console.log(counterSlice.actions.increment()) => {type: 'counter/increment'}

    // createSlice also generates the slice reducer function that knows how to respond to all these action types:
    //const newState = counterSlice.reducer(
    // { value: 10 },
    //  counterSlice.actions.increment()
    //)
    //console.log(newState)
    // {value: 11}
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
