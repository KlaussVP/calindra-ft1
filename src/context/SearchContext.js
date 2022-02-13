import React, { createContext, useState } from 'react';

const SearchContext = createContext();
export default SearchContext;

export function SearchProvider({ children }) {
  const [products, setProducts] = useState([]);

  const value = {
    products,
    setProducts
  }

  return (
    <SearchContext.Provider value={value}>
      { children }
    </SearchContext.Provider>
  );
}
