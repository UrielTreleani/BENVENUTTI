import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import productList from '../../data/productsData'
import "./ProductScreen.css"
import { useState } from 'react'

function ProductScreen() {

    const [productQuantity, setProductQuantity] = useState(0)

    const incrementButton = ()=>{
        setProductQuantity(
            prev => prev + 1
        )
    }

    const decrementButton = ()=>{
        setProductQuantity(
            prev => prev > 0 ? prev - 1 : 0
        )
    }

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
                <div>
                    <div className='product-screen__product-name-container'>
                        <span className='product-screen__product-name'>
                            {product.name}
                        </span>
                        <span className='product-screen__product-price'>
                            ${product.price}
                        </span>
                    </div>
                    <div className='product-screen__product-description product-screen__content-padding-border'>
                        <span className='product-screen__product-description-title'>
                            Descripción
                        </span>
                        <p className='product-screen__product-description'>
                            {product.description}   
                        </p>
                    </div>
                </div>
                <div className='product-screen__purchase product-screen__content-padding-border'>
                    <div className='product-screen__product-quantity-container'>
                        <span className='product-screen__product-quantity-title'>
                            Cantidad
                        </span>
                        <div className='product-screen__product-quantity'>
                            <div className='product-screen__product-quantity-buttons-container'>
                                <button onClick={decrementButton} disabled={productQuantity === 0} className='product-screen__product-quantity-button'>
                                    -
                                </button>
                                <span>
                                    {productQuantity}
                                </span>
                                <button onClick={incrementButton} className='product-screen__product-quantity-button'>
                                    +
                                </button>
                            </div>  
                            <span>
                                Subtotal: ${product.price * productQuantity}
                            </span>
                        </div>
                    </div>
                    <button className='product-screen__add-to-cart-button' disabled={productQuantity === 0}>
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