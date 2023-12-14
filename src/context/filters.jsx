import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Note: 1. Crear el Contexto
export const FiltersContext = createContext();

// Note: 2. Crear el Provider, para proveer el contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = {
  children: PropTypes.node,
};
