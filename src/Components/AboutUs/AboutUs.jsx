import styles from "./AboutUs.module.css"

function AboutUs() {
  return (
    <section className={styles.container} id="about-us">
      <div className="layout-container">
          <h2 className={styles.title}>
              Nosotros
          </h2>
          <p className={styles.description}>
              Somos un negocio que hacemos todo con amor, y creemos que no hay mayor acto de amar que servirle comida al otro. Por lo cual  acá en Benvenutti trabajamos con la primera calidad siempre, para traer a tu mesa lo mejor de la gastronomía.
          </p>
      </div>
    </section>
  )
}

export default AboutUs