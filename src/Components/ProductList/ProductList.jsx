import "./ProductList.css"

function ProductCard({products}) {

  return (
    <div className="product-card__container">
      {
        products.map(product =>(
          <div key={product.id} className="product-card__content">
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
