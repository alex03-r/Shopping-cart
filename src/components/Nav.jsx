import React from 'react'
import '../style.css'

import { useSelector } from 'react-redux'

import { Link, NavLink } from 'react-router-dom'

export const Nav = () => {


  const { item } = useSelector((state) => state.items)


  return (

    <div className=' navBar bg-dark d-flex  justify-content-between '>

      <div className='d-flex align-items-center ms-5 '>

        <Link to="/" className='link '>Home</Link>
      </div>
      <div className='d-flex align-items-center me-3'>

        <NavLink to='/shoppingcart' className='shpCart  linkAmount'>
          <i class="bi bi-cart"></i>
        </NavLink>
        <div className='cardAmount'>{item} </div>
      </div>

    </div>

  )
}
