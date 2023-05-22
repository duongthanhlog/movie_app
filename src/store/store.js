import { configureStore } from '@reduxjs/toolkit';

import homeReducer from './Slices/homeSlice'
import sortReducer from './Slices/sortSlice'
import searchReducer from './Slices/searchSlice';

const store = configureStore({
    reducer : {
        home : homeReducer,
        sort : sortReducer,
        search : searchReducer
    }
})



export default store;