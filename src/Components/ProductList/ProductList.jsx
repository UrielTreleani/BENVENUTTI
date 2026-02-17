import { Link } from "react-router-dom"
import styles from "./ProductList.module.css"

function ProductCard({products}) {

    return (
      <div className={styles.container}>
        {
          products.map(product =>(
          <Link to={"/producto/" + product.id} className={styles.link} key={product.id} >
              <div className={styles.content}>
                <div className={styles.image}>
                  <img src={product.img} alt={product.name} />
                </div>
                <div className={styles.title}> 
                  <p>
                    {product.name}
                  </p>
                  <span className={styles.price}>
                    ${product.price}
                  </span>
                </div>  
              </div>
          </Link>
          ))
        } 
      </div>
    )
  }

  export default ProductCard
