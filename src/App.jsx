import { useState } from 'react'
import "./Styles/global.css"
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import MenuScreen from './Screens/MenuScreen/MenuScreen'
import ProductCard from './Components/ProductList/ProductList'
import ProductScreen from './Screens/ProductScreen/ProductScreen'
import CartScreen from './Screens/CartScreen/CartScreen'
import CheckoutScreen from './Screens/CheckoutScreen/CheckoutScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Routes>
          <Route path='/producto/:id_product' element={<ProductScreen/>}/>
          <Route path='/menu' element={<MenuScreen/>}/>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/carrito' element={<CartScreen/>}/>
          <Route path='/checkout' element={<CheckoutScreen/>}/>
        </Routes>
      </div>
  )                                                           
}

export default App
