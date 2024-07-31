import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const opensans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={opensans.className} >
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
