import theme from "@/styles/theme";
import styled from "styled-components";

export const Spinner = styled.div`
  border: 16px solid ${theme.colors.hoverPrimary};
  border-top: 16px ${theme.colors.primary} solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
  z-index: 20;
  top: 50%;
  left: 45%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
