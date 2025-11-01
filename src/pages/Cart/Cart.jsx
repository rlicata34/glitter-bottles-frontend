import { galleryImages } from "../../utils/constants";
import "./Cart.css";

function Cart() {
  return (
    <section className="cart">
      <div className="cart__container-product">
        <h1 className="cart__title">Shopping Cart</h1>
        <span className="cart__span"></span>
        <div className="cart__product-details">
          <img
            src={galleryImages[0].image}
            alt="Product image"
            className="cart__image"
          />
          <h2 className="cart__product">{galleryImages[0].name}</h2>
          <p className="cart__price">{galleryImages[0].price}</p>
        </div>
        <span className="cart__span"></span>
        <p className="cart__subtotal-cart">{`Subtotal(1 Item): ${galleryImages[0].price}`}</p>
      </div>
      <div className="cart__container-checkout">
        <p className="cart__subtotal-checkout">{`Subtotal(1 Item): ${galleryImages[0].price}`}</p>
        <button className="cart__checkout-btn">Proceed to Checkout</button>
      </div>
    </section>
  );
}

export default Cart;
