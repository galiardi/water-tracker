import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer1 from "../components/Footer1";

export default function Container(props) {
  return (
    <>
      <Head>
        <title>Leivas</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <div className="container">
        <Navbar />
        <div className="containerChild">{props.children}</div>
        <div className="footer">
          <Footer1 />
        </div>
        <div className="safeArea"></div>
      </div>
      <style jsx>{`
        @media (min-width: 520px) {
          .container {
            width: 520px;
          }
        }

        .containerChild {
          min-height: 80vh;
          padding: 0 1rem;
        }
        .footer {
          position: fixed;
          height: 4rem;
          bottom: 0px;
          margin-bottom: 0px;
          background-color: white;
          width: inherit;
        }
        .safeArea {
          height: 4rem;
        }
      `}</style>
    </>
  );
}
