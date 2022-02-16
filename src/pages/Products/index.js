import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchContext from "../../context/SearchContext";
import { ProductsContainer, ProductsTable, EachProduct, EachPontuation } from "./styles";

export default function Products() {
  const { products } = useContext(SearchContext);
  let navigate = useNavigate();

  function handleClik(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <ProductsContainer>
      { products.length === 0 
        ? (
          <>
          <p>Produto não encontrado.</p>
          <button onClick={handleClik}>Voltar</button>
          </>
        )
        : (
          <>
          <h1>Lista de produtos:</h1>
          <ProductsTable>
            <div className="title">Produto</div>
            <div className="title">Pontuação</div>
            {products.map(p => (
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
          </>
        )
      }
    </ProductsContainer>
  );
}
