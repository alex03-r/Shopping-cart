import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CardItems } from './CardItems';
import { incremetByQuantity } from './slices/AllProductsReducer'


export const ShoppingCart = () => {

  const { cardItem } = useSelector(state => state.allData);
  // console.log(cardItem);

  let dispatch = useDispatch();

  function increme(id){

    dispatch(incremetByQuantity(id));
  }
  
  return (

    <div className='container mt-4'>
      {/* <h1 className='h2'>Cart</h1> */}
      {
        cardItem.map((items) => 

        (<CardItems key={items.id} {...items} increme={ () =>  increme(items.id) } />)  
        
        )
      }
    </div>
  )
}
