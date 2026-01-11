import { useState } from 'react'
import "./Styles/global.css"
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import MenuScreen from './Screens/MenuScreen/MenuScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Routes>
          <Route path='/menu' element={<MenuScreen/>}/>
          <Route path='/' element={<HomeScreen/>}/>
        </Routes>
      </div>
  )
}

export default App
