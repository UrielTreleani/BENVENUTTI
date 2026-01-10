import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className='header-container'>
            <div className='header__brand-container'>
                <img src="/benvenutti-icon.png" alt="helado" className='header__logo'/>
                <span className='marca'>
                    Benvenutti
                </span>
            </div>
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