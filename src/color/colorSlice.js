


import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name:'color',
    initialState:{
        backgroundColor: '#222831',
    },
    reducers:{
        colorChange: (state,action) => {

            state.backgroundColor = action.payload
        

        }
    }
})

export const {colorChange} = colorSlice.actions
export default colorSlice.reducer