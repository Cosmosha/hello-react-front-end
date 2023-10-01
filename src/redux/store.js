import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './messages/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
