import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import Header from "./components/Header";
import SearchProducts from "./pages/SearchProducts";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" component={SearchProducts} />
      </Routes>
    </Router>
  );
}