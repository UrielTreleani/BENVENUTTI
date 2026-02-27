import { Link } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {

    return (
        <header className={styles.container}>
            <div className={`${styles.content} layout-container`}>
                <div className={styles.links}>
                    <Link to="/" className={styles.brand}>
                        <div className={styles.logo}>
                            <img src="/benvenutti-icon.png" alt="Benvenutti logo" />
                        </div>
                        <span>Benvenutti</span>
                    </Link>
                    <button className={styles.hamburger} aria-label="Abrir menú">
                    <i className="bi bi-list"></i>
                    </button>
                </div>
                <div className={styles.search_bar}>
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        aria-label="Buscar productos"
                    />
                    <button aria-label="Buscar">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
                <nav className={styles.nav}>
                    <div className={styles.anchors}>
                        <a href="#products">Productos</a>
                        <a href="#combos">Combos</a>
                        <a href="#about-us">Nosotros</a>
                        <a href="#contact">Contacto</a>
                    <Link to="/carrito" className={styles.button}>
                        <i className="bi bi-cart"></i>
                    </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}


export default Header