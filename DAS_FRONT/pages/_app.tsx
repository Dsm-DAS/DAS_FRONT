import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "../styles/globalTheme";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ReactQueryDevtools initialIsOpen={true} />
          </RecoilRoot>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
