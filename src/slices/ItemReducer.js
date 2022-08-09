
import { createSlice } from "@reduxjs/toolkit";

export const ItemReducer = createSlice({

    name:'items',

    initialState: {
        item: 0
    },
    reducers:{
        increment: (state, action) =>{
            state.item +=1
        },


       

    }

})

export const { increment } = ItemReducer.actions