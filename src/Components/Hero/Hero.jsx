import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.container}>
        <div className={`layout-container ${styles.content}`}>
            <div className={styles.titles}>
                    <h2 className={styles.title}>
                        Sabores que te hacen sonreír
                    </h2>
                    <p className={styles.description}> 
                        Helados, ensaladas de fruta, panes caseros y mucho mas.
                    </p>
                    <button className={styles.button}>
                        Explorar sabores
                    </button>
            </div>
            <div className={styles.imageBox}>
                <img src="/hero-img.png" alt="helado"/>
            </div>
        </div>
    </div>
  )
}

export default Hero