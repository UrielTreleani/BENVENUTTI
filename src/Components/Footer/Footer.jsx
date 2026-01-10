import "./Footer.css"

function Footer() {
  return (
    <div className="footer__container">
        <div className="footer__content">
            <div className="footer__section">
                <span className="footer__brand">
                    Benvenutti
                </span>
                <p className="footer__tagline">
                    Un emprendimiento hecho con amor. Helados artesanales y ensaladas de fruta frescas para alegrar tu día.
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
                        Panes
                    </span>
                    <span>
                        Postres
                    </span>
                    <span>
                        Budines
                    </span>
                    <span>
                        Viandas
                    </span>
                    <span>
                        Helados
                    </span>
                    <span>
                        Facturas
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
                <div className="footer__section-list-container footer__contant-list">
                    <span>
                        <i class="bi bi-whatsapp"></i>
                        WhatsApp: 1234567890
                    </span>
                    <span>
                        Email: niideacomoes@gmail.com
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