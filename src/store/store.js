import { configureStore } from '@reduxjs/toolkit';
import userReducer from './core/config/counterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

