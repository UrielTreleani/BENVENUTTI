import styles from "./Footer.module.css"

function Footer() {

    const mensajeWhatsapp = encodeURIComponent("Hola, quisiera hacer un pedido")

  return (
    <footer className={styles.container} id="contact">
        <div className={`layout-container ${styles.content}`}>
            <div className={styles.brand}>
                <span>
                    Benvenutti
                </span>
                <p className={styles.tagline}>
                    Audaces fortuna iuvat
                </p>
            </div>
            <div className={styles.section}>
                <span className={styles.title}>
                    MENÚ
                    <i class="bi bi-chevron-down"></i>
                </span>
                <div className={styles.list}>
                    <span>
                        Ensaladas de fruta
                    </span>
                    <span>
                        Postres
                    </span>
                    <span>
                        Viandas
                    </span>
                    <span>
                        Ver menú
                    </span>
                </div>
            </div>
            <div className={styles.section}>
                <span className={styles.title}>
                    ZONAS DE ENTREGA
                    <i class="bi bi-chevron-down"></i>
                </span>
                <div className={styles.list}>
                    <span>
                        Merlo
                    </span>
                    <span>
                        San Antonio de Padua
                    </span>
                </div>
            </div>
            <div className={styles.section}>
                <span className={styles.title}>
                    CONTACTO
                    <i class="bi bi-chevron-down"></i>
                </span>
                <div className={styles.list}>
                    <span>
                        <a href={"https://wa.me/5491122634984?text=" + mensajeWhatsapp} target="_blank" className={styles.whatsapp}>
                        <i className="bi bi-whatsapp"></i>
                            WhatsApp: +5491122634984
                        </a>
                    </span>
                    <span>
                        Email: benvenutti3010@gmail.com
                    </span>
                    <span>
                        Horarios: Lun-Dom 10am-8pm
                    </span>
                </div>
            </div>
        </div>
    </footer>
)
}

export default Footer