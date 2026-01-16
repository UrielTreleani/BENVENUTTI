import productList from "../../data/productsData"
import FilterMenu from "../FilterMenu/FilterMenu"
import ProductList from "../ProductList/ProductList"
import { useState } from "react"
import "./Menu.css"



function Menu() {

    const maxPrice = Math.max(
        ...productList.map(product => product.price)
    )


  const [value, setValue] = useState(maxPrice)

    const handlePriceChange = (event)=>{
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


    console.log(value)

  return (
    <div className="menu__container">
      <div className="menu__filter-container">
        <FilterMenu selectedCategories={selectedCategories} handleCategoryChange={handleCategoryChange} handlePriceChange={handlePriceChange} value={value} maxPrice={maxPrice}/>
      </div>
      <div className="menu__list">
        <span>
          Mostrando {filteredProducts.length} de {productList.length}
        </span>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  )
}

export default Menu