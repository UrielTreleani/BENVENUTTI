import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import "../ScreenStyles/ScreenStyles.css"
import productList from '../../data/productsData'
import Menu from '../../Components/Menu/Menu'
import "./MenuScreen.css"

function MenuScreen() {

  const products = productList

  return (
    <div>
      <div className='screen__header'>
        <div className='menu-screen__header'>
          <Header/>
          <div className='menu-screen__subitlte-container'>
            <h2>
              Nuestro Catálogo
            </h2>
          <span>
            Explorá nuestra variedada para enontrar lo que mas te guste
          </span>
          </div>
        </div>
      </div >
      <div>
        <Menu/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MenuScreen