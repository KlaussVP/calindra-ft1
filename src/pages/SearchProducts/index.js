import React from "react";
import { Button, MainContainer, SearchBox, SearchForm } from "./styles";

export default function SearchProducts() {
  function handleSubmition (e) {
    e.preventDefault();
    console.log("tamo indo!!");
  }

  return (
    <MainContainer>
      <SearchBox>
        <h1>Busque seu produto</h1>
        <SearchForm onSubmit={handleSubmition}>
          <label for="product">Digite o produto:</label>
          <input type="search" id="product" name="product" />
          <Button>Buscar</Button>
        </SearchForm>
      </SearchBox>
    </MainContainer>
  );
}
