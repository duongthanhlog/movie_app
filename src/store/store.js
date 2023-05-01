import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice'
import sortReducer from './sortSlice'

const store = configureStore({
    reducer : {
        home : homeReducer,
        sort : sortReducer,
    }
})

export default store;