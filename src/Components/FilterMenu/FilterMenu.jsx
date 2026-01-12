import "./FilterMenu.css"
import filterList from "../../data/filterData"
import { useState } from "react"
import productList from "../../data/productsData"

function FilterMenu() {

    const [selectedCategories, setSelectedCategories] = useState([])

    const handleCategoryChange = (event) => {
        const value = event.target.value

        setSelectedCategories(prev =>
            prev.includes(value)
                ? prev.filter(category => category !== value)
                : [...prev, value]
        )
    }

    const filteredProducts = productList.filter(product =>
        selectedCategories.includes(
            product.category.toLowerCase()
        )
    )

    return (
        <div className="filter-menu__container">
            <span className="filter-menu__title">
                Filtros
            </span>
            <div className="filter-menu__categories-container">
                <span className="filter-menu__subtitle">
                    CATEGORIAS
                </span>
                {
                    filterList.map(filter => (
                        <label className="filter-menu__category" key={filter}>
                            <input type="checkbox" value={filter.toLowerCase()} checked={selectedCategories.includes(filter.toLowerCase())} onChange={handleCategoryChange} />
                            {filter}
                        </label>
                    ))
                }
            </div>
            <div className="filter-menu__price-range-containar">
                <span>
                    RANGO DE PRECIO
                </span>
            </div>
            <div>
                <span>
                    ORDENAR POR
                </span>
            </div>
        </div>
    )
}

export default FilterMenu