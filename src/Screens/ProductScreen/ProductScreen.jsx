import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import productList from '../../data/productsData'
import styles from "./ProductScreen.module.css"
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
    <div className={styles.container}>
        <div>
            <Header/>
        </div>
        <div className={styles.content}>
            <div className={styles.imageBox}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.product}>
                <div>
                    <div className={styles.titleBox}>
                        <span className={styles.title}>
                            {product.name}
                        </span>
                        <span className={styles.price}>
                            ${product.price}
                        </span>
                    </div>
                    <div className={styles.descriptionBox}>
                        <span className={styles.descriptionTitle}>
                            Descripción
                        </span>
                        <p className={styles.description}>
                            {product.description}   
                        </p>
                    </div>
                </div>
                <div className={styles.pucharse}>
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