import productList from "../../data/productsData"
import FilterMenu from "../FilterMenu/FilterMenu"
import ProductList from "../ProductList/ProductList"
import { useContext, useState } from "react"
import styles from "./Menu.module.css"
import MobileFilterContext from "../../Contexts/MobileFilterContext/MobileFilterContext"


function Menu() {

  const {isOpen, toggleMenu} = useContext(MobileFilterContext)

  const maxPrice = Math.max(
    ...productList.map(product => product.price)
  )

  const [value, setValue] = useState(maxPrice)

  const handlePriceChange = (event) => {
    setValue(event.target.value)
  }

  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCategoryChange = (event) => {
    const value = event.target.value

    setSelectedCategories(prev =>
      prev.includes(value)
        ? prev.filter(category => category !== value)
        : [...prev, value]
    )
  }

  const filteredProducts =
    selectedCategories.length === 0
      ? productList.filter(product => product.price <= value)
      : productList.filter(product =>
        product.category.some(category =>
          selectedCategories.includes(category.toLowerCase())
          &&
          product.price <= value
        )
      )

      console.log(isOpen)

  return (
    <div className={`${styles.container} layout-container`}>
      <div className={styles.filter}>
        <div className={styles.boxButton}>
          <button onClick={toggleMenu}>
            Filtros
            <i className="bi bi-funnel-fill"></i>
          </button>
        </div>
        <div className={styles.filterBox}>
          <FilterMenu selectedCategories={selectedCategories} handleCategoryChange={handleCategoryChange} handlePriceChange={handlePriceChange} value={value} maxPrice={maxPrice} isOpen={isOpen}/>
        </div>
      </div>
      <div className={styles.list}>
        <span>
          Mostrando {filteredProducts.length} de {productList.length}
        </span>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  )
}

export default Menu