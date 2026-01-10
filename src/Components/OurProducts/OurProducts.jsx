import ProductCard from "../ProductCard/ProductCard"
import "./OurProducts.css"

function OurProducts() {
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
                <button className="our-products__button">
                    Ver Todo el Menú
                </button>
            </div>
        </div>
        <div className="our-products__products-cards">
            <ProductCard/>
        </div>
    </div>
    )
}

export default OurProducts