import { useId } from 'react';
import { useFilters } from '../../hooks';
import './Filters.css';

export const Filters = () => {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div className="range-slider">
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          className="range-slider__range"
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1500"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span className="range-slider__value">${filters.minPrice}</span>
      </div>

      <div className="select-category">
        <label htmlFor={categoryFilterId}>Categoría:</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
};
