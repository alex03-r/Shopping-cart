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

      let product = state.products.find(  product => product.id === action.payload );
      console.log(product);
      console.log( action.payload  )

      if (state.cardItem.length >= 4) {

        return null;

      } else {
        // write the if here
        if(state.cardItem.includes(product.id == action.payload)){
          console.log('si esta')
        }
        state.cardItem.push(product);


      }

    }
  }
})

export const { byId } = AllProductsReducer.actions