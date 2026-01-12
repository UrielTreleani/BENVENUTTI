import Hero from '../../Components/Hero/Hero'
import Header from '../../Components/Header/Header'
import OurProducts from '../../Components/OurProducts/OurProducts'
import "../ScreenStyles/ScreenStyles.css"
import Footer from '../../Components/Footer/Footer'

function HomeScreen() {
  return (
    <div className='home-screen__container'>
        <div className='screen__header'>
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