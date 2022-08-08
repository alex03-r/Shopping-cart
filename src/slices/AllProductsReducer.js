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
      console.log(product);
      // console.log( action.payload )
      if (state.cardItem.length >= 4) {

        return null;

      } 
      else {
        //  if(state.cardItem.includes(product)) {

        //   alert('this item is already in the card ')
        // }
        // write the if here
        // if(state.cardItem.includes(product.id == action.payload)){
        //   console.log('si esta')
        // }
        let newItem = {}
        newItem.id = product.id;
        newItem.name = product.name;
        newItem.price = product.price;
        newItem.brand = product.brand;       
        newItem.size = product.size;
        newItem.describtion = product.describtion;
        newItem.img = product.img;
        newItem.quantity = 1;
       
     

        state.cardItem = [...state.cardItem, newItem ]

      }

    },
    getIndex: (state, action) => {

      state.index = action.payload
    },
  }
})

export const { addToCard, getIndex } = AllProductsReducer.actions