import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import productList from "../../data/productsData";
import "./CartScreen.css";
import { useNavigate } from "react-router-dom";

function CartScreen({ cartItems, total }) {
    const navigate = useNavigate();

    return (
        <div>
            <div className="cart-screen__header-container">
                <Header/>
            </div>
            <section className="cart-container">
                <h1 className="cart-title">Tu carrito</h1>
                <div className="cart-content">
                    <div className="cart-items">
                        {productList.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.img} alt={item.name} />
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <span>{item.variant}</span>
                                    <div className="cart-item-footer">
                                        <div className="cart-quantity">
                                            <button>-</button>
                                                <span>{item.quantity}</span>
                                            <button>+</button>
                                        </div>
                                        <span className="cart-item-price">
                                            ${item.price * item.quantity}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <aside className="cart-summary">
                        <h4>Resumen de compra</h4>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>
                        <div className="summary-row">
                            <span>Envío</span>
                            <span>Calculado al finalizar</span>
                        </div>
                        <div className="summary-row summary-total">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                        <button onClick={() => navigate("/checkout")}>
                            Finalizar compra
                        </button>
                    </aside>
                </div>
            </section>
            <div className="cart-screen__footer-contianer">
                <Footer/>
            </div>
        </div>
    );
}

export default CartScreen;