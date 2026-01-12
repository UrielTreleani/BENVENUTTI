import productList from "../../data/productsData"
import FilterMenu from "../FilterMenu/FilterMenu"
import ProductCard from "../ProductCard/ProductCard"
import "./Menu.css"



function Menu() {


  return (
    <div className="menu__container">
        <div className="menu__filter-container">
            <FilterMenu/>
        </div>
        <div className="menu__list">
            <ProductCard products={productList}/>
        </div>
    </div>
  )
}

export default Menu