import { useId } from 'react';
import { useCart } from '../../hooks';
import { CartIcon } from '../';
import { CartList, CartEmpty } from './';

import './Cart.css';

export const Cart = () => {
  const cartCheckboxId = useId();
  const { cart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
        <span>{cart.length}</span>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        {cart.length > 0 ? <CartList /> : <CartEmpty />}
      </aside>
    </>
  );
};
