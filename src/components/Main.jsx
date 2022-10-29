import React from 'react'
import '../style.css'
import { Products } from './Products'
import products from '../data/products.json'
import { useDispatch } from 'react-redux'
import { getIndex } from '../slices/AllProductsReducer'

export const Main = () => {

    const dispatch = useDispatch();

    const selectByIndex = (i) => {
        dispatch(getIndex(i));
    }

    return (

        <div className='container'>

            <h1 className='ms-lg-5 ms-xl-2'>Shopping Cart</h1>

            <div className='row mb-3  ms-lg-5 ms-xl-0  gap-3 justify-content-center justify-content-md-start '>
                {
                    products.map((product, index) => {
                        return <Products key={product.id}
                            {...product}
                            selectByIndex={selectByIndex} index={index} />
                    })
                }
            </div>
        </div>


    )
}
