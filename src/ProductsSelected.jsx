import React from 'react'
import './style.css'
import { increment } from './slices/ItemReducer'
import { byId } from './slices/AllProductsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Link   } from 'react-router-dom'


export const ProductsSelected = () => {

  const { products } = useSelector((state) => state.allData)

  const { index } = useSelector(state => state.itemSelected)

  const { id,img, name, price, brand, size, describtion } = products[index];

  const dispatch = useDispatch();


  const addItem = () => {
    dispatch(increment());
    dispatch(byId(id));
  }

  const buyNowItem = () =>{
    console.log('buy!')
  }

  return (
    <div className='container mt-5'>
      <div className='d-flex items-parent justify-content-center aling-items-center '>
        <div className='item-selected'>
          <h1 className='mb-5 text-center'>{name}</h1>
          <img className='w-100 h-75' src={require(`./img/${img}`)} alt="" />
        </div>
        <div className='item-selected-desc'>
          <h3 className='text-center mb-5'>Info about the {name}</h3>
          <p></p>
          <p className='card-text'><b>Price: </b> {price} </p>
          <p className='card-text'><b>Brand: </b>{brand}</p>
          <p className='card-text'><b>Zise: </b> {size}</p>
          <p className='card-text'><b>Describtion: </b>{describtion}</p>
          <Link to='/shoppingcart' className='btn btn-danger mt-5' onClick={ addItem }>+Add to Cart</Link>
          <Link to ='/buynow' className='btn btn-primary mt-2' onClick={buyNowItem} >!Buy Now</Link>
        </div>
      </div>
    </div>
  )

}
