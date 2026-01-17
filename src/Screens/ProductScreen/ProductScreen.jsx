import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import productList from '../../data/productsData'
import "./ProductScreen.css"
import "../ScreenStyles/ScreenStyles.css"

function ProductScreen() {

    const {id_product} = useParams()

    const product = productList.find(product => product.id === id_product)

  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='product-screen__container'>
            <div className='product-screen__product-img-container'>
                <img src={product.img} alt={product.name} />
            </div>
            <div className='product-screen__content'>
                <div className='product-screen__product-name'>
                    <span>
                        {product.name}
                    </span>
                    <span>
                        ${product.price}
                    </span>
                </div>
                <div className='product-screen__product-description'>
                    <span>
                        Descripción
                    </span>
                    <p>
                        {product.description}   
                    </p>
                </div>
                <div >
                    <span>
                        Unidades
                    </span>
                    <div>
                        <span>
                            Cantidad
                        </span>
                        <div>
                            BOTON DE SUMAR Y RESTAR
                        </div>  
                            <span>
                                Subtotal
                            </span>
                    </div>
                    <button>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default ProductScreen