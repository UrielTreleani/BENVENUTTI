import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <div className='header-container'>
            <Link className='marca' to={"/"}>
                <div className='header__brand-container'>
                    <span className="marca">
                        <div className="header__logo-container">
                            <img src="/benvenutti-icon.png" alt="logo" />
                        </div>
                        Benvenutti
                    </span>
                </div>
            </Link>
            <div className="search-bar__container">
                <input type="text" className="search-bar"/>
            </div>
            <nav className='header__nav'>
                <div className='header-nav__links'>
                    <a href="#products">Productos</a>
                    <a href="">Nosotros</a>
                    <a href="#contact">Contacto</a>
                    <a href="">Combos</a>
                </div>
                <Link to={"/carrito"} className="cart"> 
                    <button className='header__button'>
                        <i className="bi bi-cart"></i>
                        <span>
                            Carrito
                        </span>
                    </button>
                </Link>
            </nav>
        </div>
    )
}

export default Header