import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/styles/globals.css`} />
        <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/components/index.css`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
