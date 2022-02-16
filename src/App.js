import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import { SearchProvider } from "./context/SearchContext";

import Header from "./components/Header";
import SearchProducts from "./pages/SearchProducts";
import Products from "./pages/Products";
import FilteredProducts from "./pages/FilteredProducts";

export default function App() {
  return (
    <Router>
      <SearchProvider>
        <Header />
        <Routes>
          <Route path="/" element={<SearchProducts />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/filtered-products" element={<FilteredProducts />}/>
        </Routes>
      </SearchProvider>
    </Router>
  );
}
