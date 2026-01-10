import { useState } from 'react'
import "./Styles/global.css"
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import HomeScreen from './Screens/HomeScreen/HomeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <HomeScreen/>
      </div>
  )
}

export default App
