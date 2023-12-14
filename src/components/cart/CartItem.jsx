import PropTypes from 'prop-types';
import { RemoveFromCartIcon } from '../icons/Icons';

export const CartItem = ({
  id,
  thumbnail,
  title,
  price,
  quantity,
  addToCart,
  removeFromCart,
}) => {
  return (
    <li key={id}>
      <img src={thumbnail} alt="iphone" />

      <div>
        <p>
          <strong>{title}</strong>
          <span> - ${price * quantity}</span>
        </p>

        <footer>
          <button> - </button>
          <small> Qty: {quantity}</small>
          <button onClick={addToCart}> + </button>
        </footer>
      </div>

      <a onClick={removeFromCart}>
        <RemoveFromCartIcon />
      </a>
    </li>
  );
};

CartItem.propTypes = {
  id: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};
