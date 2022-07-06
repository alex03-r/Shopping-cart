
import { configureStore } from "@reduxjs/toolkit";

import { AllProductsReducer } from "./slices/AllProductsReducer";

import { ItemReducer} from './slices/ItemReducer'

import { itemSelectedReducer } from "./slices/itemSelectedReducer";


export const store = configureStore({

    reducer:{
        items: ItemReducer.reducer,
        allData: AllProductsReducer.reducer,
        itemSelected: itemSelectedReducer.reducer
    }
    
})