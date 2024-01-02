import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { increment(state) {state.value++} },
})

const iniitalState = {
    balance: 0
};

export const { increment } = counterSlice.actions;
export default configureStore({ reducer: { counter: counterReducer, }, });
