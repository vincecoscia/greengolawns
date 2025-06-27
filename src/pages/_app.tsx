import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import SEO from "../../next-seo.config";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <main className={opensans.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}
