import {
    Action,
    configureStore,
    getDefaultMiddleware,
    ThunkAction,
  } from '@reduxjs/toolkit';
  import { persistStore, persistReducer } from 'redux-persist'
  import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
  import storageSession from "redux-persist/lib/storage/session";
import rootReducer from './reducerSlice';

  export const persistConfig = {
    key: "root",
    storage: storageSession,
    whitelist: ["home"],
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
   >;