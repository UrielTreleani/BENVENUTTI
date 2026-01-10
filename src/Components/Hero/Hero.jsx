import "./Hero.css"

function Hero() {
  return (
    <div className="hero-container">
        <div className="hero__content">
            <div className="hero__titles-container">
                    <h2 className="hero__title">
                        Sabores que te hacen sonreír
                    </h2>
                    <p className="hero__description"> 
                        Helados, ensaladas de fruta, panes caseros y mucho mas.
                    </p>
                    <button>
                        Explorar sabores
                    </button>
            </div>
            <div className="hero__image-container">
                <img src="/hero-img.png" alt="helado"/>
            </div>
        </div>
    </div>
  )
}

export default Hero