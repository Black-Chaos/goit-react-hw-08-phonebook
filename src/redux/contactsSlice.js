import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

const handlePending = state => ({ ...state, isLoading: true });
const handleError = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleError,
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleError,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleError,
    [fetchContacts.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: payload,
        error: null,
      };
    },
    [deleteContact.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: state.items.filter(item => item.id !== payload.id),
        error: null,
      };
    },
    [addContact.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, payload],
        error: null,
      };
    },
  }
});