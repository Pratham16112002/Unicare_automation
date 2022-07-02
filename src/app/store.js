import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import toolReducer from '../features/Slice/toolSlice'

export const store = configureStore({
  reducer: {
    tool: toolReducer,
  },
});
