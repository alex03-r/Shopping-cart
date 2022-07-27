import { createSlice } from "@reduxjs/toolkit";
import { AllProducts } from '../allProducts'

 export const AllProductsReducer = createSlice({
    name:'allData',
    initialState:{
        products: AllProducts,
        cardItem:[], 
           
               
    },
    reducers:{
         byId:(state, action) =>{
           
            console.log(state.cardItem)
          let product =   state.products.filter( function(product){

               return product.id == action.payload
          });
         // console.log(product.t);
         // let money = state.cardItem.includes(product[0].t) ;
                       
           if(state.cardItem.length >= 4){    

           return null;

           } else  if(state.cardItem.includes(product[0])){ 
            return null;
         }
           else{

            state.cardItem.push(product)
           }          
         } ,
         incrementFirst:(state , action)=>{

          // state.products. 
         }
    }
})

export const { byId } = AllProductsReducer.actions