import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchContext from "../../context/SearchContext";
import FilterSearch from "../../utils/FilterSearch";
import { ProductsContainer, NotFoundContainer, ProductsList, ProductsTable, EachProduct, EachPontuation, Suggestions } from "./styles";

export default function FilteredProducts() {
  const { products, filteredProducts, suggestions, setFilteredProducts } = useContext(SearchContext);
  let navigate = useNavigate();

  function handleClik(e) {
    e.preventDefault();
    navigate("/");
  }

  function HandleFilter(term) { 
    setFilteredProducts(FilterSearch(products, term));
    navigate("/filtered-products");
  }

  return (
    <ProductsContainer>
      { filteredProducts.length === 0 
        ? (
          <NotFoundContainer>
            <p>Produto não encontrado.</p>
            <button onClick={handleClik}>Voltar</button>
          </NotFoundContainer>
        )
        : (
          <>
          <ProductsList>
            <h1>Lista de produtos:</h1>
            <ProductsTable>
              <div className="title">Produto</div>
              <div className="title">Pontuação</div>
              {filteredProducts.map(p => (
                <>
                  <EachProduct>
                    <p className="name">{p.name}</p>
                    <p className="id">id: {p.id}</p>
                  </EachProduct>
                  <EachPontuation>
                    <p>{p._meta.score}</p>
                  </EachPontuation>
                </>
              ))}
            </ProductsTable>
          </ProductsList>
          <Suggestions>
            <h2>Filtros</h2>
            {suggestions.map(s => (
              <li onClick={() => HandleFilter(s.term)}>{s.term}</li>
            ))}
          </Suggestions>
          </>
        )
      }
    </ProductsContainer>
  );
}
