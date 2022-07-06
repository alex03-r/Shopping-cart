import { createSlice } from "@reduxjs/toolkit"

export const itemSelectedReducer = createSlice({
    name: 'itemSelected',
    initialState: {
        index: 10,
        firstAmount: 0,
        secondtAmount: 0,
        thirdAmount: 0,
        fourAmount: 0
    },
    reducers: {
        getIndex: (state, action) => {

            state.index = action.payload
        },
        incrementFirstAmount: (state) => {

            state.firstAmount += 1
        },
        incrementSecondAmount: (state) => {

            state.secondtAmount += 1
        },
        incrementThirdAmount: (state) => {

            state.thirdAmount += 1
        },
        incrementFourAmount: (state) => {

            state.fourAmount += 1
        },
        decrementFirstAmount:(state) =>{
            state.firstAmount -= 1
        },
        decrementSecondAmount:(state) =>{
            state.secondtAmount -= 1
        },
        decrementThirdAmount:(state) =>{
            state.thirdAmount -= 1
        },
        decrementFourAmount:(state) =>{
            state.secondtAmount -= 1
        }
        // incrementPriceFirstAmont:(state , action)=>{

        //     state.

        // }


    }

})
export const { getIndex,
    incrementFirstAmount,
    incrementSecondAmount,
    incrementThirdAmount,
    incrementFourAmount,

    decrementFirstAmount,
    decrementSecondAmount,
    decrementThirdAmount,
    decrementFourAmount
} = itemSelectedReducer.actions;