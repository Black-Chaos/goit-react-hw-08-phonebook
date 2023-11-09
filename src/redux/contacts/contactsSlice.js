import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
  extraReducers: build =>
    build
      .addCase(fetchContacts.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: payload,
        error: null,
      }))
      .addCase(deleteContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items.filter(item => item.id !== payload.id),
        error: null,
      }))
      .addCase(addContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items, payload],
        error: null,
      }))
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          addContact.rejected,
          fetchContacts.rejected,
          deleteContact.rejected
        ),
        handleError
      ),
});

export const contactReducer = contactsSlice.reducer;
