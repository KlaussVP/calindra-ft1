import React, { createContext, useState } from 'react';

const SearchContext = createContext();
export default SearchContext;

export function SearchProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const value = {
    products,
    setProducts,
    suggestions,
    setSuggestions,
    filteredProducts,
    setFilteredProducts
  }

  return (
    <SearchContext.Provider value={value}>
      { children }
    </SearchContext.Provider>
  );
}
