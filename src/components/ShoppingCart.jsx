
import { useSelector, useDispatch } from 'react-redux'
import { incremetByQuantity, decrementByQuantity, removeItem } from '../slices/AllProductsReducer'
import { decrement } from '../slices/ItemReducer';
import { CardItems } from './CardItems';

import products from '../data/products.json'


export const ShoppingCart = () => {

  const { cardItem } = useSelector(state => state.allData);

  let dispatch = useDispatch();


  function increme(id) {

    dispatch(incremetByQuantity(id));
  }

  function drecreme(id) {

    dispatch(decrementByQuantity(id));

  }

  function deleteItem(id) {

    dispatch(removeItem(id));
    dispatch(decrement());
  }

  return (

    <div className='container mt-4'>
      {
        cardItem.map((items) =>
        (
          <CardItems key={items.id} {...items} increme={increme} drecreme={drecreme} deleteItem={deleteItem} />
        ))
      }

      {cardItem.length > 0 ?

        <div className=' me-1 w-100'>
          <h2 style={{ textAlign: "end" }} >
            <u>Total  {cardItem.reduce((total, current) => {
              let item = products.find(pro => pro.id === current.id)
              return total + item.price * current.quantity
            }, 0)}
            </u>
          </h2>
        </div> : <h1 className='text-center mt-y'>There is no item in the cart for now</h1>

      }

    </div>



  )
}
