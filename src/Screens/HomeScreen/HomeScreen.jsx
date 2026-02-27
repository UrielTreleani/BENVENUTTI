import Hero from '../../Components/Hero/Hero'
import Header from '../../Components/Header/Header'
import OurProducts from '../../Components/OurProducts/OurProducts'
import Footer from '../../Components/Footer/Footer'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Combos from '../../Components/Combos/Combos'

function HomeScreen() {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
            <Hero/>
        </div>
        <div>
            <OurProducts/>
        </div>
        <div>
          <Combos/>
        </div>
        <div>
          <AboutUs/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default HomeScreen