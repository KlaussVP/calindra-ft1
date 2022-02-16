import styled from "styled-components";

const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px 0;

  h1 {
    font-weight: 700;
    font-size: 3em;
    margin-bottom: 20px;
  }

  & > p {
    font-weight: 700;
    font-size: 3em;
    margin-bottom: 20px;
  }

  button {
    max-width: 180px;
    border-radius: 10px;
    border: none;
    padding: 0.4em 1em;
    font-size: 1.6em;
    background: #f4a261;
    font-weight: bold;
    cursor: pointer;
  }
`;

const ProductsTable = styled.article`
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
  background: #264653;
  padding: 8px;

  .title {
    padding: 20px 10px;
    background: #FFF;
    text-align: center;
    font-weight: 700;
    font-size: 1.3em; 
  }
`;

const EachProduct = styled.div`
  text-align: center;
  padding: 20px 10px;
  background: #FFF;

  .name {
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 10px;
  }

  .id {
    font-weight: 400;
    font-size: 0.9em; 
  }
`;

const EachPontuation = styled.div`
  text-align: center;
  padding: 20px 10px;
  background: #FFF;

  p {
    font-weight: 400;
    font-size: 1em;
  }
`;

export {
  ProductsContainer,
  ProductsTable,
  EachProduct,
  EachPontuation
};
