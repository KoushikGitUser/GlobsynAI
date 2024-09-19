import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './Slices/AuthSlice';
import GetSlice from './Slices/GetSlices';
import PostSlice from './Slices/PostSlice';

export const Store = configureStore({
    reducer:{
      Auth:AuthSlice.reducer,
      Get: GetSlice.reducer,
      Post:PostSlice.reducer,
    }
})

export default Store;