import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export const Products = ({index,id, img, name, brand, price, describtion, selectByIndex }) => {

    return (
        
        <Link to="/products" className='card ' key={id} onClick={() => selectByIndex(index)}>
            <img src={require(`../src/img/${img}`)} className='img' alt='laptop' />
            <div className='card-body'>
                <p className='card-text'> <b> Name:  </b> {name}  </p>
                <p className='card-text'> <b>Brand:</b> {brand} </p>
                <p className='card-text'> <b>Price:</b> {price}</p>
                <p className='card-text'> <b>Describtion:</b> {describtion}</p>               
            </div>
        {/* </div> */}
        </Link>
    )
}
