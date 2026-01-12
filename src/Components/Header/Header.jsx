import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <div className='header-container'>
            <Link className='marca' to={"/"}>
                <div className='header__brand-container'>
                    <span className="marca">
                        Benvenutti
                    </span>
                </div>
            </Link>
            <nav className='header__nav'>
                <div className='header-nav__links'>
                    <a href="">Productos</a>
                    <a href="">Sobre Mi</a>
                    <a href="">Contacto</a>
                </div>
            </nav>
            <button className='header__button'>
                <i className="bi bi-cart"></i>
                <span>
                    Carrito
                </span>
            </button>
        </div>
    )
}

export default Header