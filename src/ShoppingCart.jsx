import React from 'react'
import { useSelector } from 'react-redux'
import { CardItems } from './CardItems';

export const ShoppingCart = () => {

  const { cardItem } = useSelector(state => state.allData);
  
  return (

    <div className='container mt-4'>
      <h1 className='h2'>Cart</h1>
      {
        cardItem.map((items, index) => 
        (<CardItems key={items.id} {...items} />)  
        )
      }
    </div>
  )
}
