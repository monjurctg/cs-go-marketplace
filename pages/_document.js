import {Html, Head, Main, NextScript} from "next/document";

import Script from "next/script";
import {useEffect, useState} from "react";

export default function Document() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  },[]);

  return (
    <Html>
      <Head>
        {/* <script href="/https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" /> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Lexend:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <body>
        <NextScript />
        <Main />
        
      

        {/* <script
          defer
          src="https://kit.fontawesome.com/130b7044ae.js"
          crossorigin="anonymous"></cript> */}
      </body>
    </Html>
  );
}

