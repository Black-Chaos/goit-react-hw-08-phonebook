import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;