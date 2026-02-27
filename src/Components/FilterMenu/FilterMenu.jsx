import styles from "./FilterMenu.module.css"
import filterList from "../../data/filterData"

function FilterMenu({selectedCategories, handleCategoryChange, handlePriceChange, value, maxPrice}) {


    return (
        <div className={styles.container}>
            <span className={styles.title}>
                Filtros
            </span>
            <div className={styles.categories}>
                <span className={styles.subtitle}>
                    CATEGORIAS
                </span>
                {
                    filterList.map(filter => (
                        <label className={styles.category} key={filter}>
                            <input type="checkbox" value={filter.toLowerCase()} checked={selectedCategories.includes(filter.toLowerCase())} onChange={handleCategoryChange} className={styles.checkbox}/>
                            {filter}
                        </label>
                    ))
                }
            </div>
            <div className={styles.range}>
                <span>
                    RANGO DE PRECIO
                </span>
                <div className={styles.slide}>
                    <span>
                        $0
                    </span>
                    <input type="range" min={0} max={maxPrice} step={5} value={value}  onChange={handlePriceChange} className={styles.slider}/>
                    <output>
                        ${value}
                    </output>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu