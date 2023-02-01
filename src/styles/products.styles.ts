import theme from "@/styles/theme";
import styled from "styled-components";

//=====================================

export const Container = styled.div`
  width: 100%;
  height: 91vh;
  display: grid;
  margin-top: 15vh;
  justify-items: center;
  align-items: center;
`;

//=====================================

export const ContainerGrid = styled.div`
  width: 938px;
  height: 601px;
  top: 217px;
  left: 247px;
  display: grid;

  grid-template-columns: auto auto auto auto;
  gap: 20px;
`;

//=====================================

export const ContainerCard = styled.div`
  box-shadow: 2px 2px 8px 0px #cbcbcb;
  height: 285px;
  width: 217.56px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;
//=====================================
export const ImageCard = styled.div`
  margin-top: 5px;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
`;

//=====================================

export const FooterCard = styled.div`
  padding: 8px;
  p {
    position: absolute;
    padding: 5px;
    color: #7e7c7c;
    font-size: 10px;
    font-weight: 700;
    text-align: left;
  }
`;

//======================================

export const HeaderCard = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-items: center;

  h1 {
    color: ${(props) => props.theme.colors.textSecundary};
    width: 70%;
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
  }
  span {
    position: absolute;
    right: 0px;
    margin-right: 3%;
    text-align: center;
    width: 50px;
    border-radius: 5px;
    background-color: #373737;
    padding: 8px;
    font-weight: 600;
    font-size: 12px;
  }
`;

//=================================

export const ButtunAdd = styled.div`
  display: grid;
  margin-top: 30vh;
  width: 100%;
  bottom: 0px;

  cursor: pointer;

  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 5px;
  position: absolute;

  justify-items: center;

  font-weight: 600;
  div {
  }
  span {
    margin: 10px;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.hoverSecundary};
  }
`;
