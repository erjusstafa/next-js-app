import {
    createSlice, PayloadAction,
  } from '@reduxjs/toolkit';
  
  export interface UserState  {
    userAuth: boolean;
  };
  
  const initialState: UserState = {
    userAuth: false,
  };
  
  export const homeSlice = createSlice({
    name: 'home',
    initialState,
   reducers: {
     authentication : (state, {payload} : PayloadAction<UserState | any>) => {
      state.userAuth = payload;
     }
    },
  });
  export const {authentication} = homeSlice.actions;
  
  export default homeSlice.reducer;