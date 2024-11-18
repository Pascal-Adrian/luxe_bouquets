import { useState } from "react";
import Close from "/src/assets/icons/icons-300/close_FILL0_wght300_GRAD0_opsz24.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { removeFromCart } from "../../store/cartSlice";

interface CartProps {
  turnOffCart: () => void;
}

function Cart({ turnOffCart }: CartProps) {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const [message, setMessage] = useState<string>("");

  const subtotal = cart.reduce((acc: number, position) => {
    return acc + position.item.price * position.quantity;
  }, 0);

  const handleRemove = (id: number, category: string | null) => {
    dispatch(removeFromCart({ id: id, category: category }));
  };

  const handleGiftMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div id="cart">
      <div className="cart-usefull">
        <div className="cart-title">
          <h6>Shopping cart</h6>
          <div onClick={turnOffCart}>
            <Close />
          </div>
        </div>
        <div className="cart-content">
          {cart.map((position, index) => (
            <div key={index} className="cart-content-card">
              <img src={position.item.image_link} alt={position.item.name} />
              <div className="cart-content-card-info">
                <div>
                  <p className="cart-content-card-overline">
                    {position.item.name}
                  </p>
                  <p className="cart-content-card-body">
                    Quantity &#40;{position.quantity}&#41;
                  </p>
                  <p className="cart-content-card-subtitle">
                    ${position.item.price * position.quantity}
                  </p>
                </div>
                <p
                  className="cart-remove-item"
                  onClick={() =>
                    handleRemove(position.item.id, position.item.category)
                  }
                >
                  Remove
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-subtotal">
          <p>Subtotal</p>
          <p>${subtotal}.00</p>
        </div>
        <textarea
          className="cart-message"
          placeholder="Gift Message"
          value={message}
          onChange={handleGiftMessage}
          rows={10}
        />
        <p className="cart-info">
          Shipping & taxes calculated at checkout
          <br />
          Free standard shipping within Kyiv
        </p>
        <button className="cart-button">check out</button>
      </div>
    </div>
  );
}

export default Cart;
