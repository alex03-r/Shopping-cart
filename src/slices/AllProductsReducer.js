import { createSlice } from "@reduxjs/toolkit";
import {AllProducts} from '../allProducts'

 export const AllProductsReducer = createSlice({

    name:'allData',

    initialState:{
        products: AllProducts,
        cardItem:[]
        
    },
    reducers:{
         byId:(state, action) =>{

          let product =   state.products.filter( product => product.id === action.payload);                
           if(state.cardItem.length >= 4){             
           return 
           }else{

            state.cardItem.push(product)

           }          
         } ,
         incrementFirst:(state , action)=>{

          // state.products. 
         }
    }
})

export const { byId } = AllProductsReducer.actions