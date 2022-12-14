import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import '../style.css'
import { increment } from '../slices/ItemReducer'
import { addToCard } from '../slices/AllProductsReducer'

import products from '../data/products.json'

export const ProductsSelected = () => {

  const { index, cardItem } = useSelector(state => state.allData)

  const { id, img, name, price, brand, size, describtion } = products[index];

  const dispatch = useDispatch();

  const addItem = () => {

    let exist
    exist = cardItem.find(product => product.id === id)

    if (exist) {

      alert('this item has been added already');
      <Navigate to='/shoppingcart' />
      return null;
    }

    dispatch(increment());
    dispatch(addToCard(id));

  }

  return (
    <div className='container-lg mt-5'>
      {/* d-flex items-parent justify-content-center aling-items-center */}
      <div className='d-flex items-parent justify-content-center aling-items-center'>
            <div className='item-selected'>
              <h1 className='mb-5 text-center'>{name}</h1>
              <img className='w-100 h-75' src={require(`../img/${img}`)} alt="" />
            </div>
            <div className='item-selected-desc'>
              <h3 className='text-center mb-5'>Info about the {name}</h3>              
              <p className='card-text'><b>Price: </b> {price} </p>
              <p className='card-text'><b>Brand: </b>{brand}</p>
              <p className='card-text'><b>Zise: </b> {size}</p>
              <p className='card-text'><b>Describtion: </b>{describtion}</p>
              <Link to='/shoppingcart' className='btn btn-danger mt-5' onClick={addItem}>+Add to Cart</Link>
            </div>
      </div>
    </div>
  )

}
