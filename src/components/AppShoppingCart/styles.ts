import styled from "styled-components";

//=================================

export const StyledMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  transform: translateX(0);
  height: 100vh;
  text-align: left;

  width: 33%;
  z-index: 10;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0px 8px -2px ${(props) => props.theme.colors.textSecundary};

  div {
    display: flex;
  }
  h1 {
    font-size: 27px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

//=================================

export const GridCardCar = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  top: 9vh;
  padding: 5vh;
  overflow-y: scroll;
  height: 72vh;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 15px;
  }
`;
//=================================

export const FooterNav = styled.div`
  display: flex;
  margin-top: 78vh;
  h1 {
    margin-right: 25vh;
  }
`;
//=================================
export const ButtonEndShop = styled.div`
  position: absolute;
  width: 100%;
  font-size: 16pt;
  font-weight: 700;
  padding: 15px;
  top: 92%;
  background-color: ${(props) => props.theme.colors.textSecundary};
  cursor: pointer;
  :hover {
    background-color: #37c85c;
  }
`;
