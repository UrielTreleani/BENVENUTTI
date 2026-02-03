import "./FilterMenu.css"
import filterList from "../../data/filterData"
import productList from "../../data/productsData"

function FilterMenu({selectedCategories, handleCategoryChange, handlePriceChange, value, maxPrice}) {


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
                            <input type="checkbox" value={filter.toLowerCase()} checked={selectedCategories.includes(filter.toLowerCase())} onChange={handleCategoryChange} className="checkbox-category"/>
                            {filter}
                        </label>
                    ))
                }
            </div>
            <div className="filter-menu__price-range-containar">
                <span>
                    RANGO DE PRECIO
                </span>
                <div className="filter-menu__price-range-slide">
                    <span>
                        $0
                    </span>
                    <input type="range" min={0} max={maxPrice} step={5} value={value}  onChange={handlePriceChange} className="filter-menu__slider"/>
                    <output>
                        ${value}
                    </output>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu