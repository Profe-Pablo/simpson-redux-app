import { createSlice } from "@reduxjs/toolkit";

export const beersSlice = createSlice({
    name: "beers",
    initialState: {
        beers:0
    },
    reducers:{
        increment: (state) => {
            state.beers += 1
        },
        decrement: (state) => {
            if(state.beers>0){
                state.beers -= 1
            }       
        },
        incrementByAmount: (state, action)=>{
            state.beers += action.payload
        },
        reset: (state) => {
            state.beers = 0
        }
    }
})

export const {increment, decrement, incrementByAmount, reset}=beersSlice.actions

export default beersSlice.reducer