import { useState } from 'react';
import { Products, Header, Footer, Cart } from './components';
import { products as initialProducts } from './mocks/products.json';
import { useFilters } from './hooks';
import { IS_DEVELOPMENT } from './config/config';
import { CartProvider } from './context';

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <div className="container">
        <Header />
        <Cart />
        <Products products={filteredProducts} />

        {IS_DEVELOPMENT && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
