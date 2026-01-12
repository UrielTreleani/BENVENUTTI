import "./FilterMenu.css"
import filterList from "../../data/filterData"

function FilterMenu({selectedCategories, handleCategoryChange}) {

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