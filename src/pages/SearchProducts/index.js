import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, MainContainer, SearchBox, SearchForm } from "./styles";
import SearchContext from "../../context/SearchContext";
import Loading from "../../components/Loading";

export default function SearchProducts() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const { setProducts, setSuggestions } = useContext(SearchContext);
  let navigate = useNavigate();

  function handleChange(e) {
    if (e.target.value !== "") {
      let firstCapsLetter = e.target.value[0].toUpperCase();
      setProduct(firstCapsLetter + e.target.value.substring(1));
    } else {
      setProduct(e.target.value);
    }
  }

  function checkProduct(productsList) {
    let filteredP = [];

    for (const element in productsList) {
      if (productsList[element].name.includes(product)) {
        filteredP.push(productsList[element]);
      }
    }

    return filteredP;
  }

  function handleSubmition(e) {
    e.preventDefault();
    setLoading(true);
    
    axios.get("https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook")
    .then((resp) => {
      setLoading(false);
      setProducts(checkProduct(resp.data.products));
      setSuggestions(resp.data.suggestions);
      navigate("/products");
    })
    .catch(error => {
      if(error) {
        console.log(error);
        setLoading(false);
        alert("Produto não encontrado.");
      }
    });
  }

  return (
    <MainContainer>
      <SearchBox>
        <h1>Busque seu produto</h1>
        <SearchForm onSubmit={handleSubmition}>
          <label for="product">Digite o produto:</label>
          <input type="search" id="product" name="product" value={product} 
          onChange={handleChange} placeholder="Ex.: camisas" required/>
          { loading 
            ? <Loading />
            : <Button loading={loading}>Buscar</Button>
          }
        </SearchForm>
      </SearchBox>
    </MainContainer>
  );
}
