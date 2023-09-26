import { configureStore } from '@reduxjs/toolkit';

import homeReducer from './Slices/homeSlice'
import sortReducer from './Slices/sortSlice'
import searchReducer from './Slices/searchSlice';
import userReducer from './Slices/userSlice'


const store = configureStore({
    reducer: {
        home: homeReducer,
        sort: sortReducer,
        search: searchReducer,
        signUp: userReducer
    }
})



export default store;