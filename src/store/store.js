import { configureStore } from '@reduxjs/toolkit';

import homeReducer from './Slices/homeSlice'
import sortReducer from './Slices/sortSlice'
import searchReducer from './Slices/searchSlice';
import filterGenresReducer from './Slices/filterGenresSlice';


const store = configureStore({
    reducer : {
        home : homeReducer,
        sort : sortReducer,
        search : searchReducer,
        filterGenre : filterGenresReducer
    }
})



export default store;