import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
    
} from 'react-router-dom'
import { Nav } from './Nav'

import { Main } from './Main'
import { ProductsSelected } from './ProductsSelected'
import { ShoppingCart } from './ShoppingCart'



export const AppRoute = () => {
    return (

        <Router>
            <div>
                <Nav />
                <Routes>
                   <Route exact path="/" element={<Main />}></Route>
                    <Route exact path="/products" element={<ProductsSelected />}></Route>                    
                    <Route exact path='/shoppingcart' element={<ShoppingCart />}></Route>                

                </Routes>
            </div>
        </Router>

    )
}
