import "./Footer.css"

function Footer() {

    const mensajeWhatsapp = encodeURIComponent("Hola, quisiera hacer un pedido")

  return (
    <div className="footer__container" id="contact">
        <div className="footer__content">
            <div className="footer__section">
                <span className="footer__brand">
                    Benvenutti
                </span>
                <p className="footer__tagline">
                    Audaces fortuna iuvat
                </p>
            </div>
            <div className="footer__section">
                <span className="footer__section-title">
                    MENÚ
                </span>
                <div className="footer__section-list-container">
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
            <div className="footer__section">
                <span className="footer__section-title">
                    ZONAS DE ENTREGA
                </span>
                <div className="footer__section-list-container">
                    <span>
                        Merlo
                    </span>
                    <span>
                        San Antonio de Padua
                    </span>
                </div>
            </div>
            <div className="footer__section">
                <span className="footer__section-title">
                    CONTACTO
                </span>
                <div className="footer__section-list-container">
                    <span>
                        <a href={"https://wa.me/5491122634984?text=" + mensajeWhatsapp} target="_blank" className="whatsapp__anchor">
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
    </div>
  )
}

export default Footer