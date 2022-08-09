import { createSlice } from "@reduxjs/toolkit";
// import { AllProducts } from '../allProducts'


import products from '../data/products.json'

export const AllProductsReducer = createSlice({
  name: 'allData',
  initialState: {
    cardItem: [],
    index: 10
  },
  reducers: {

    addToCard: (state, action) => {

      let product = products.find(product => product.id === action.payload);       
      
      state.cardItem = [...state.cardItem, {...product ,quantity: 1 } ];   
    },
    getIndex: (state, action) => {

      state.index = action.payload
    },

    incremetByQuantity: (state, action) => {


      let exist = products.find(x => x.id === action.payload.id);
      console.log(exist)
   
    //  return state.cardItem.map(item =>{

    //     if(item.id === action.payload){

    //     return  {...item, quantity: item.quantity + 1 }
    //     }  
    //    } )
    return   state.cardItem.map(item =>{

          if(item.id === action.payload.id){
  
          return {...item, quantity: item.quantity + 1 }
          }  else{ return  item };
         } )
    
  }
}
});

export const { addToCard, getIndex, incremetByQuantity } = AllProductsReducer.actions