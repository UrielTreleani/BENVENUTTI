import productList from "../../data/productsData"
import FilterMenu from "../FilterMenu/FilterMenu"
import ProductList from "../ProductList/ProductList"
import { useState } from "react"
import "./Menu.css"



function Menu() {

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
    ? productList
    : productList.filter(product =>
        product.category.some(cat =>
          selectedCategories.includes(cat.toLowerCase())
        )
      )

  return (
    <div className="menu__container">
      <div className="menu__filter-container">
        <FilterMenu selectedCategories={selectedCategories} handleCategoryChange={handleCategoryChange}/>
      </div>
      <div className="menu__list">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  )
}

export default Menu