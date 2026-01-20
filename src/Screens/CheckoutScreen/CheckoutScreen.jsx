import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./CheckoutScreen.css";
import { useNavigate } from "react-router-dom";

function CheckoutScreen({ cartItems, total }) {


    return (
        <div>
            <div className="checkout-screen__header-container">
                <Header/>
            </div>
            <section className="checkout-container">
                <h1 className="checkout-title">Finalizar compra</h1>
                <div className="checkout-content">
                    {/* FORMULARIO */}
                    <div className="checkout-form">
                        {/* DATOS PERSONALES */}
                        <div className="checkout-card">
                            <h3>Datos personales</h3>

                            <div className="checkout-field">
                                <label>Nombre completo</label>
                                <input type="text" placeholder="Juan Pérez" />
                            </div>

                            <div className="checkout-field">
                                <label>Email</label>
                                <input type="email" placeholder="juan@email.com" />
                            </div>

                            <div className="checkout-field">
                                <label>Teléfono</label>
                                <input type="tel" placeholder="+54 9 11 1234 5678" />
                            </div>
                        </div>

                        {/* ENVÍO */}
                        <div className="checkout-card">
                            <h3>Dirección de envío</h3>

                            <div className="checkout-field">
                                <label>Dirección</label>
                                <input type="text" placeholder="Calle 123" />
                            </div>

                            <div className="checkout-row">
                                <div className="checkout-field">
                                    <label>Ciudad</label>
                                    <input type="text" />
                                </div>

                                <div className="checkout-field">
                                    <label>Código postal</label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>

                        {/* PAGO */}
                        <div className="checkout-card">
                            <h3>Método de pago</h3>

                            <div className="payment-option">
                                <input type="radio" name="payment" defaultChecked />
                                <span>Mercado Pago</span>
                            </div>

                            <div className="payment-option">
                                <input type="radio" name="payment" />
                                <span>Tarjeta de crédito / débito</span>
                            </div>

                            <div className="payment-option">
                                <input type="radio" name="payment" />
                                <span>Transferencia bancaria</span>
                            </div>
                        </div>
                    </div>

                    {/* RESUMEN */}
                    <aside className="checkout-summary">
                        <h4>Resumen</h4>

                        <div className="summary-row">
                            <span>Productos</span>
                            <span></span>
                        </div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>

                        <div className="summary-row">
                            <span>Envío</span>
                            <span>Calculado</span>
                        </div>

                        <div className="summary-row summary-total">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>

                        <button>
                            Pagar ahora
                        </button>
                    </aside>
                </div>
            </section>
            <div className="checkout-screen__footer-contianer">
                <Footer/>
            </div>
        </div>
    );
}

export default CheckoutScreen;