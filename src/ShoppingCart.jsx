import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CardItems } from './CardItems';
import { incremetByQuantity } from './slices/AllProductsReducer'


export const ShoppingCart = () => {

  const { cardItem } = useSelector(state => state.allData);

  let dispatch = useDispatch();

  function increme(item){

    dispatch(incremetByQuantity(item));
  }
  
  return (

    <div className='container mt-4'>
      <h1 className='h2'>Cart</h1>
      {
        cardItem.map((items) => 

        (<CardItems key={items.id} {...items} increme={ () =>  increme(items) } />)  
        
        )
      }
    </div>
  )
}
