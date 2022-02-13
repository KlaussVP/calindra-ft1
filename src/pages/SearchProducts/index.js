import React, { useState } from "react";
import axios from "axios";
import { Button, MainContainer, SearchBox, SearchForm } from "./styles";

export default function SearchProducts() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmition(e) {
    e.preventDefault();
    setLoading(true);
    console.log(product);
    
    // axios.get("https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook")
    // .then((resp) => {
    //   console.log(resp.data);
    // });
  }

  return (
    <MainContainer>
      <SearchBox>
        <h1>Busque seu produto</h1>
        <SearchForm onSubmit={handleSubmition}>
          <label for="product">Digite o produto:</label>
          <input type="search" id="product" name="product" value={product} 
          onChange={(e) => setProduct(e.target.value)} placeholder="Encontre o produto" required/>
          <Button>Buscar</Button>
        </SearchForm>
      </SearchBox>
    </MainContainer>
  );
}
