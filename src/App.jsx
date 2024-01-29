import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Collections from './components/Collections'
import Features from './components/Features'
import Products from './components/Products'
import Review from "./components/Review"
import Footer from './components/Footer'
import {Provider} from "react-redux"
import { store } from './redux/store'
import {Toaster} from "react-hot-toast"
import Cart from './components/Cart'
const App = () => {
  const [showCart , SetShowCart] = useState(false)
  return (
    <div>
      <Provider store={store} >
      <Navbar SetShowCart={SetShowCart} />
      {
        showCart && <Cart SetShowCart={SetShowCart}  />
       }
      <div id='home'>
        <Home />
      </div>
      <div id='shop'>
        <Shop />
      </div>
      <div>
        <Collections />
      </div>
      <div id='features'>
        <Features />
      </div>
      <div id='products'>
        <Products />
      </div>
      <div id='review'>
        <Review />
      </div>
      <div id='footer'> 
        <Footer />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
      </Provider>
    </div>
  )
}

export default App