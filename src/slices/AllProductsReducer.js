import { createSlice } from "@reduxjs/toolkit";

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

      state.cardItem = [...state.cardItem, { ...product, quantity: 1, totalPrice:product.price  }];
    },
    getIndex: (state, action) => {

      state.index = action.payload
    },
    incremetByQuantity:(state, action) => {

      let stateCopied = state.cardItem.map(function (item) {

        if (item.id === action.payload) {
         
          return { ...item, quantity: item.quantity + 1 , totalPrice: item.totalPrice + item.price }
        } else {
          return item
        };
      })
      return { ...state, cardItem: stateCopied }

    },
    decrementByQuantity:(state, action) => {

      let stateCopied = state.cardItem.map(function (item) {

        if (item.id === action.payload) {
         
          return { ...item, quantity: item.quantity - 1 , totalPrice: item.totalPrice - item.price }
        } else {
          return item
        };
      })
      return { ...state, cardItem: stateCopied }
      
    }
  }
});

export const { addToCard, getIndex, incremetByQuantity } = AllProductsReducer.actions