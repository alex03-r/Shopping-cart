
import { createSlice } from "@reduxjs/toolkit";

export const ItemReducer = createSlice({

    name:'items',

    initialState: {
        item: 0
    },
    reducers:{
        
        increment: (state) =>{
            state.item +=1
        },     
        decrement:(state) =>{
            state.item -=1

        }

    }

})

export const { increment, decrement } = ItemReducer.actions