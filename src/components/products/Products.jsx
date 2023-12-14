import './Products.css';
import PropTypes from 'prop-types';
import { AddToCartIcon, RemoveFromCartIcon } from '../';
import { useCart } from '../../hooks';

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="container products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id} className="product-card">
              <div className="product-tumb">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-details">
                <span className="product-catagory">{product.brand}</span>
                <h4>
                  <a href="#">{product.title}</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vero, possimus nostrum!
                </p>
                <div className="product-bottom-details">
                  <div className="product-price">${product.price}.00</div>
                  <div className="product-links">
                    {isProductInCart ? (
                      <a
                        className="remove-item"
                        onClick={() => removeFromCart(product)}
                      >
                        <RemoveFromCartIcon />
                      </a>
                    ) : (
                      <a onClick={() => addToCart(product)}>
                        <AddToCartIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};
