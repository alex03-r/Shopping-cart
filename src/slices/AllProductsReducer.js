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

    
      console.log(action.payload);
      // let exist = state.cardItem.find(item => item.id === action.payload.id);

      // if (exist) {
      state.cardItem.map(item =>{

        if(item.id === action.payload){

        return   { ...item, quantity: item.quantity + 1 } 
        }  

       }       
        )
      
      // else {
      //   console.log("hello")
      // }
        // }else{

        //   state.cardItem = [...state.cardItem, {...action.payload,  quantity: 1 } ]
        // }
      // } else {

        // state.cardItem = [...state.cardItem, { ...action.payload, quantity: 1 } ]
        


      //     return  item.quantity + 1
      // state.cardItem.map(item => {
      //   if (item.id == item.id) {
      //     return [...item, item.quantity + 1]

      //   }
      // })

    
  }
}
});

export const { addToCard, getIndex, incremetByQuantity } = AllProductsReducer.actions