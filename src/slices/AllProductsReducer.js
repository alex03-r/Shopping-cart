import { createSlice } from "@reduxjs/toolkit";
import { AllProducts } from '../allProducts'

export const AllProductsReducer = createSlice({
  name: 'allData',
  initialState: {
    products: AllProducts,
    cardItem: [],
  },
  reducers: {

    byId: (state, action) => {
      let product = state.products.filter(product => product.id === action.payload);
      console.log(product.flat())

      if (state.cardItem.length >= 4) {

        return null;

      } else {
        // write the if here
        state.cardItem.push(product);


      }

    }
  }
})

export const { byId } = AllProductsReducer.actions