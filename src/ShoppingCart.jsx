import React from 'react'
import { byId } from './slices/AllProductsReducer'
import {
incrementFirstAmount,
incrementSecondAmount,
incrementThirdAmount,
incrementFourAmount,

decrementFirstAmount,
decrementSecondAmount,
decrementThirdAmount,
decrementFourAmount
} from './slices/itemSelectedReducer'
import { useSelector, useDispatch } from 'react-redux'

export const ShoppingCart = () => {


  let dispatch = useDispatch()

  let { firstAmount, secondtAmount, thirdAmount, fourAmount } = useSelector(state => state.itemSelected)

  const { cardItem } = useSelector(state => state.allData)

  let itemsFlat = cardItem.flat();
  //console.log(cardItem);

  const getCurrentQuantity = (i) => {

    if (i == 0) {
      return firstAmount;
    } else if (i === 1) {
      return secondtAmount;
    } else if (i == 2) {
      return thirdAmount;
    } else if (i == 3) {
      return fourAmount;
    }

  }


  const getCurrentPrice = (index) =>{
     
    // if(itemsFlat[index] === 0){
    //   return JSON.stringify(itemsFlat[0].price)
    // }    

  }

  const addQuantity = (index) => {

    if (index == 0) {

      dispatch(incrementFirstAmount());

    } else if (index == 1) {
      dispatch(incrementSecondAmount())
    }
    else if (index == 2) {
      dispatch(incrementThirdAmount())
    }
    else if (index == 3) {
      dispatch(incrementFourAmount())

    }
  }

  const removeQuantity = (index) =>{

    
    if (index == 0) {

      dispatch(decrementFirstAmount());

    } else if (index == 1) {
      dispatch(decrementSecondAmount())
    }
    else if (index == 2) {
      dispatch(decrementThirdAmount())
    }
    else if (index == 3) {
      dispatch(decrementFourAmount())

    }

  }

  return (

    <div className='container mt-4'>
      <h1 className='h2'>Cart</h1>
      {
        itemsFlat.map((items, index) => {
          return <div key={items.id} className='card-container d-flex'>
            <img src={require(`./img/${items.img}`)} className='img-Cart' />
            <div className='card-info'>
              <p className='h3 text-center' >{items.name}</p>
              <p className='quantity h4'> Quantity  +{getCurrentQuantity(index)}</p>
              <p className='total h3'> Total: {items.price}  {getCurrentPrice(index)}</p>
              <p className='ms-5'>Price: {items.price}</p>
              <p className='ms-5'>Brand: {items.brand}</p>
              <p className='ms-5'>Describtion: {items.describtion}</p>
              <div className='d-flex justify-content-end' >
                <button className='btn btn-primary btn-remove' onClick={() => addQuantity(index)}>+</button>
                <button className='btn btn-danger btn-remove' onClick={() => removeQuantity(index)}>-</button>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}
