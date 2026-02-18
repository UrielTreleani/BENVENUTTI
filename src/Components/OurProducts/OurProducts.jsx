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
                <div className={styles.title}>
                    <h2 >
                        Nuestros Productos
                    </h2>
                    <span>
                        Nuestros productos mas vendidos
                    </span>
                </div>
                <div className={styles.subtitle}>
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