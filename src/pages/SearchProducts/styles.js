import styled from "styled-components";

const MainContainer = styled.main`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.2);
  color: #000;

  h1 {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 1.3em;
  }
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  label {
    font-size: 1.3em;
    font-weight: 400;
    margin-bottom: 10px;
    align-self: start;
  }

  input {
    width: 100%;
    font-size: 1.3em;
  }
`;

const Button = styled.button`
  max-width: 180px;
  border-radius: 10px;
  border: none;
  color: #264653;
  padding: 0.4em 1em;
  font-size: 1.6em;
  margin-top: 0.8em;
  background: #f4a261;
  font-weight: bold;
`;

export {
  MainContainer,
  SearchBox,
  SearchForm,
  Button
};
