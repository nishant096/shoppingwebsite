import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homepage/HomePage'
import Cart from '../components/Cart/Cart'
import Product from '../components/Product/Product'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer';
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Checkout from '../components/Checkout/Checkout'
import Order from '../Order/Order'
import OrderDetails from '../Order/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product/>}></Route>
        <Route path='/:product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
      </Routes>
      <div>
      <Footer/> 
      </div>
    </div>
  )
}

export default CustomerRouters
