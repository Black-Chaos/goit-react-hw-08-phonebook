import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { logIn, logOut, refreshUser, signUp, updateAvatar } from './operation';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: build =>
    build
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.user.avatar = payload;
      })
      .addMatcher(
        isAnyOf(logIn.fulfilled, signUp.fulfilled),
        (state, { payload: { user, token } }) => {
          state.user = user;
          state.token = token;
          state.isLoggedIn = true;
        }
      ),
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
