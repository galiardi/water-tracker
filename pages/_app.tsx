import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { DataProvider } from "../context/data";
import Container from "../components/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <DataProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </DataProvider>
    </SessionProvider>
  );
}

export default MyApp;
