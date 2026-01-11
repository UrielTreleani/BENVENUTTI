import { Link } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard"
import "./OurProducts.css"
import productList from "../../data/productsData"

function OurProducts() {

    const filteredProducts = productList.filter(product => (product.category?.includes("destacado")))

        return (
    <div className="our-products__container">
        <div className="our-products__header">
            <h2 className="our-products__title">
                Nuestros Productos
            </h2>
            <div className="our-products__subtitle-container">
                <span className="our-products__subtitle">
                    Nuestros productos mas vendidos
                </span>
                <Link to={"/menu"} className="our-products__button">Ver todo el menú</Link>
            </div>
        </div>
        <div className="our-products__products-cards">
            <ProductCard products={filteredProducts}/>
        </div>
    </div>
    )
}

export default OurProducts