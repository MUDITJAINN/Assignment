// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './slices/companySlice';
import communicationReducer from './slices/communicationSlice';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    communication: communicationReducer,
  },
});
export default store