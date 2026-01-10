import productList from "../../data/productsData"
import "./ProductCard.css"

function ProductCard() {

  return (
    <div className="product-card__container">
      {
        productList.filter(product => product.category?.includes("destacado")).map(product =>(
          <div key={product.id} 
          className="product-card__content">
            <div className="product-card__img">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="product-card__title"> 
              <p>
                {product.name}
              </p>
              <span>
                {product.price}
              </span>
            </div>  
          </div>
        ))
      }
    </div>
  )
}

export default ProductCard