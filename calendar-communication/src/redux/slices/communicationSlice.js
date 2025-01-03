// src/redux/slices/communicationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  communications: [],
};

const communicationSlice = createSlice({
  name: 'communication',
  initialState,
  reducers: {
    logCommunication: (state, action) => {
      state.communications.push(action.payload);
    },
  },
});

export const { logCommunication } = communicationSlice.actions;
export default communicationSlice.reducer;
