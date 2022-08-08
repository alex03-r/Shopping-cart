
import { configureStore } from "@reduxjs/toolkit";

import { AllProductsReducer } from "./slices/AllProductsReducer";

import { ItemReducer} from './slices/ItemReducer'

export const store = configureStore({

    reducer:{
        items: ItemReducer.reducer,
        allData: AllProductsReducer.reducer,       
    }
    
})