import { createReducer } from '@reduxjs/toolkit';
import {
  decrement,
  increment,
  incrementByAmount,
} from './actions';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};


//The name of the reducer is counterReducer and this is what gets added
export const loginReducer = createReducer(initialState, builder => {
  builder
    .addCase(increment, state => {
      state.value++;
    })
    .addCase(decrement, state => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    });
});