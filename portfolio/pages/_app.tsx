import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SiteLanguageProvider } from "@/libs/siteLanguage";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cloud.umami.is/script.js";
    script.async = true;
    script.setAttribute(
      "data-website-id",
      "34a8e243-6dbe-4a5a-b86d-c39c0ebdbfdd",
    );
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Marlene Condesso | Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/images/logoDarkTab.png" className="h-[400px]" />
        <link
          rel="apple-touch-icon"
          href="/images/logoDarkTab.png"
          className="h-[400px]"
        />
      </Head>
      <ThemeProvider>
        <SiteLanguageProvider>
          <Component {...pageProps} />
        </SiteLanguageProvider>
      </ThemeProvider>
    </>
  );
}
