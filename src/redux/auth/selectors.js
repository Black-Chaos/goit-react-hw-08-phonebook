import { createSelector } from "@reduxjs/toolkit";

export const auth = store => store.auth;

export const selectUser = createSelector(auth, st => st.user);
export const selectIsLoggedIn = createSelector(auth, st => st.isLoggedIn);
export const selectIsRefreshing = createSelector(auth, st => st.isRefreshing);