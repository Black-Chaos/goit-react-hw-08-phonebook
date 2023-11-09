import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './auth/authSlice';
import { contactReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store)