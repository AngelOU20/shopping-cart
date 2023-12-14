import { ClearCartIcon } from '../';
import { useCart } from '../../hooks';
import { CartItem } from './CartItem';

export const CartList = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <>
      <ul>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            {...product}
            removeFromCart={() => removeFromCart(product)}
            addToCart={() => addToCart(product)}
          />
        ))}
      </ul>

      <button className="clear-cart" onClick={clearCart}>
        <ClearCartIcon />
      </button>
    </>
  );
};
