import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ProductCard from '../../Components/ProductCard/ProductCard'
import productList from '../../data/productsData'

function MenuScreen() {

  const products = productList

  return (
    <div>
      <div className='screen__header'>
        <Header/>
      </div>
      <ProductCard products={products}/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MenuScreen