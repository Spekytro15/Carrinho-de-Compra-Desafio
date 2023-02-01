import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "../styles/global";
import { Provider } from "react-redux";
import { store } from "@/store";
import { CookiesProvider } from "react-cookie";
import Header from "@/components/AppHeader";
import SpinnerLoading from "@/components/SpinnerLoading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <GlobalStyle />
            <Header />
            <SpinnerLoading />
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </CookiesProvider>
    </>
  );
}
