import styled from "styled-components";

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 0;
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  p {
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

const ProductsList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-right: 3em;

  h1 {
    font-weight: 700;
    font-size: 3em;
    margin-bottom: 20px;
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

const Suggestions = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 4em;
  color: #264653;

  h2 {
    font-weight: 700;
    font-size: 1.8em;
    margin-bottom: 20px;
  }

  li {
    font-weight: 700;
    font-size: 1em;
    list-style: none;
    margin: 5px 0;
    cursor: pointer;
  }
`;

export {
  ProductsContainer,
  NotFoundContainer,
  ProductsList,
  ProductsTable,
  EachProduct,
  EachPontuation,
  Suggestions
};
