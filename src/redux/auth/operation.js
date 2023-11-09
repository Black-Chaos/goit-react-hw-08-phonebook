import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token =>
  (axios.defaults.headers.common.Authorization = token);
const unsetAuthToken = () => (axios.defaults.headers.common.Authorization = '');

export const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setAuthToken(data.token)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const signUp = createAsyncThunk('auth/signup', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthToken(data.token)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    return unsetAuthToken()
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { auth: { token } } = thunkAPI.getState();
  if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthToken(token);
      const {data} = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
})