import styled from "styled-components";

//=================================

export const Container = styled.div`
  position: fixed;
  margin-top: -15vh;
  z-index: 10;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-items: center;
  align-items: center;
`;

//=================================

export const Logo = styled.div`
  display: flex;
  width: "20%";
  margin-left: 20px;
  justify-items: center;
  align-items: center;

  color: ${(props) => props.theme.colors.textPimary};
  h1 {
    margin-left: 5;
    font-weight: 600;
    size: 40px;
    line-height: 19px;
  }
  p {
    margin-left: 5px;
    margin-left: 5;
    font-weight: 300;
    size: 20px;
    line-height: 19px;
  }
`;

//=================================

export const Button = styled.button`
  width: 20%;
  top: 29px;
  height: 45px;
  width: 90px;

  align-items: center;
  justify-items: center;

  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;

  margin-left: 75%;

  :hover {
    background-color: ${(props) => props.theme.colors.hoverPrimary};
  }

  div {
    display: flex;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.94px;
    margin-left: 30%;
  }
  span {
    margin-left: 7px;
    text-align: center;
  }
`;
