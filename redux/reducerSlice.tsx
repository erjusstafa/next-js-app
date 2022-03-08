
import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from './reducer/reducerSlice ';

const rootReducer = combineReducers({
    home: homeReducer,
});

export default rootReducer;