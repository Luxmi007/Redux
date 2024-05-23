import { createSlice } from "@reduxjs/toolkit";

const counterSlice= createSlice({
    name: 'counter',
    initialState:{value:0},
    reducers: {
        increment: state=>{
            state.value +=1
        },
        decrement: state=>{
            state.value -=1
        },
        count: (state)=>{
            state.value +=50
        }
    }
})
    
export const {increment, decrement, count} = counterSlice.actions
export default counterSlice.reducer
