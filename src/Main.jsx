import React from 'react'
import './style.css'
// import { AllProducts } from './allProducts'
import { Products} from './Products'

import { useSelector , useDispatch } from 'react-redux'

import { getIndex } from './slices/itemSelectedReducer'


export const Main = () => {

    const { products  } = useSelector((state) => state.allData);

    const dispatch =   useDispatch();

    const selectByIndex =  (i) => {
  
        dispatch(getIndex(i));
    }

    return (

        <div className='container'>

            <h1>Main App</h1>

            <div className='row'>
                {
                        products.map((product , index) => {
                            return   <Products 
                                      {...product}                           
                                      selectByIndex={ () => selectByIndex(index)}
                            /> 
                        })                 
                }
            </div>
        </div>


    )
}
