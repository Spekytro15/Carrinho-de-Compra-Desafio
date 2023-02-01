import styled from "styled-components";

export const CardProduct = styled.div`
  margin-top: 1rem;
  width: 98%;
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  color: ${(props) => props.theme.colors.textSecundary};

  .flex-col {
    display: flex;
    flex-direction: column;
  }
  h2 {
    width: 30%;
    font-weight: 400;
    font-size: 13px;
    margin-left: 3vh;
    margin-right: 5vh;
  }
  h3 {
    margin-right: 5px;
    font-size: 14px;
    font-weight: 700;
    margin-left: 5vh;
  }
  p {
    font-size: 5px;
  }
`;

//=================================

export const CardSelect = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.textGray};
  border-radius: 5px;
  justify-items: center;
  align-items: center;
  align-items: center;
  justify-items: center;
  position: relative;
  width: 100%;

  .centro {
    font-weight: 400;
    font-size: 8px;
    padding: 5px;
  }
  .button-l {
    border: none;
    border-left: 0.1rem solid ${(props) => props.theme.colors.textGray};
    padding: 2px;
  }
  .button-r {
    border: none;
    border-right: 0.1rem solid ${(props) => props.theme.colors.textGray};
    padding: 2px;
  }
`;

//=================================

export const ButtonRemove = styled.div`
  outline: none;
  top: -5px;
  right: -5px;
  position: absolute;
  background-color: ${(props) => props.theme.colors.textSecundary};
  border-radius: 100%;
  cursor: pointer;
`;
