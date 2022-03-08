import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  import homeReducer from './reducer/reducerSlice ';

  export const store = configureStore({
    reducer: {
      home: homeReducer,

     },
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
   >;