import { Link } from "react-router-dom"
import ProductList from "../ProductList/ProductList"
import productList from "../../data/productsData"
import styles from "./OurProducts.module.css"

function OurProducts() {

    const filteredProducts = productList.filter(product => (product.category?.includes("destacado")))

        return (
    <div className={styles.container} id="products">
        <div className="layout-container">
            <div className={styles.header}>
                <h2 className={styles.title}>
                    Nuestros Productos
                </h2>
                <div className={styles.subtitle}>
                    <span>
                        Nuestros productos mas vendidos
                    </span>
                    <Link to={"/menu"} className={styles.button}>Ver todo el menú</Link>
                </div>
            </div>
            <div className={styles.cards}>
                <ProductList products={filteredProducts}/>
            </div>
        </div>
    </div>
    )
}

export default OurProducts