import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100vw;
  height: 80px;
  padding: 30px;
  font-size: 2rem;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: start;
  align-items: center;
  background: #2a9d8f;

  h1 {
    font-weight: 700;
    color: #000;
  }
`;

export default HeaderContainer;