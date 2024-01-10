import {configureStore} from '@reduxjs/toolkit';
import  librarySlice from '../Features/library/librarySlice';

 const store=configureStore({
    reducer:{librarySlice:librarySlice},
})
export default store;