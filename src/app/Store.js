import { configureStore } from "@reduxjs/toolkit";
import cartReduce from './Slice'
import colorReduce from '../color/colorSlice'

export  const Store = configureStore({
    reducer:{
        cart: cartReduce,
        color: colorReduce
    }
})
export default Store