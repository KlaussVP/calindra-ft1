import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, MainContainer, SearchBox, SearchForm } from "./styles";
import SearchContext from "../../context/SearchContext";
import Loading from "../../components/Loading";

export default function SearchProducts() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const { setProducts } = useContext(SearchContext);
  let navigate = useNavigate();

  function handleSubmition(e) {
    e.preventDefault();
    setLoading(true);
    
    axios.get("https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook")
    .then((resp) => {
      console.log(resp.data);
      setProducts(resp.data.products);
      navigate("/products");
    })
    .catch(error => {
      if(error) {
        alert("Produto não encontrado.");
      }
    });

    setLoading(false);
  }

  return (
    <MainContainer>
      <SearchBox>
        <h1>Busque seu produto</h1>
        <SearchForm onSubmit={handleSubmition}>
          <label for="product">Digite o produto:</label>
          <input type="search" id="product" name="product" value={product} 
          onChange={(e) => setProduct(e.target.value)} placeholder="Ex.: camisas" required/>
          { loading 
            ? <Loading />
            : <Button loading={loading}>Buscar</Button>
          }
        </SearchForm>
      </SearchBox>
    </MainContainer>
  );
}
