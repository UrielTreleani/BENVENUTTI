import Hero from '../../Components/Hero/Hero'
import Header from '../../Components/Header/Header'
import OurProducts from '../../Components/OurProducts/OurProducts'
import "./HomeScreen.css"
import Footer from '../../Components/Footer/Footer'

function HomeScreen() {
  return (
    <div className='home-screen__container'>
        <div className='home-screen__header'>
            <Header/>
        </div>
        <div>
            <Hero/>
        </div>
        <div>
            <OurProducts/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default HomeScreen