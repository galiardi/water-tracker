import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Container from "../components/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  );
}

export default MyApp;
