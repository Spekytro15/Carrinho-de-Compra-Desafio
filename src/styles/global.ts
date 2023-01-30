import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPimary};
    font: 400 16px Roboto, sans-serif;
  }

  a {
    color: ${(props) => props.theme.colors.background};
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color:#000;
    box-shadow: 0px 5px 0px 0px white;
    border-radius: 15px;
    height: 5px;
  }
`;
