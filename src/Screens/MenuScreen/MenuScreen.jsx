import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import productList from '../../data/productsData'
import Menu from '../../Components/Menu/Menu'
import styles from "./MenuScreen.module.css"

function MenuScreen() {

  const products = productList

  return (
    <div>
      <div>
        <div>
          <Header/>
          <div className={`${styles.titlesBox} layout-container`}>
            <h2 className={styles.title}>
              Nuestro Catálogo
            </h2>
          <span className={styles.subtitle}>
            Explorá nuestra variedada para enontrar lo que mas te guste
          </span>
          </div>
        </div>
      </div >
      <div>
      </div>
      <div className='layout-container'>
        <Menu/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MenuScreen