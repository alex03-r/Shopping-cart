import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CardItems } from './CardItems';
import { incremetByQuantity , decrementByQuantity } from './slices/AllProductsReducer'

import products from './data/products.json'


export const ShoppingCart = () => {

  const to ={
    Right:"20px",
    width:"100%",
    color:"blue"
  }

  const { cardItem } = useSelector(state => state.allData);

  let dispatch = useDispatch();

  function increme(id){

    dispatch(  incremetByQuantity(id) );
  }
  function drecreme(id){

    dispatch(  decrementByQuantity(id)  );
    
  }
  
  return (

    <div className='container mt-4'>    
    <Alert />
      {
        cardItem.map((items) => 

        (<CardItems key={items.id} {...items} increme={ () =>  increme(items.id) }  drecreme={ () => drecreme(items.id) }  />)  
        
        )
      }
      <p style={ to }>Total { cardItem.reduce((prev, current) => {
           let item  = products.find(pro => pro.id === current.id )          
        return   prev + item.price * current.quantity
         },0) }</p>
    </div>
  )
}
