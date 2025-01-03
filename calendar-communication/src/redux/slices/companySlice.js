// src/redux/slices/companySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [],
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.companies.push(action.payload);
    },
    editCompany: (state, action) => {
      const index = state.companies.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
    deleteCompany: (state, action) => {
      state.companies = state.companies.filter(c => c.id !== action.payload);
    },
  },
});

export const { addCompany, editCompany, deleteCompany } = companySlice.actions;
export default companySlice.reducer;