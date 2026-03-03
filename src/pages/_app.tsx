import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/contexts/theme";
import { I18nProvider } from "@/contexts/i18n";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Primary Meta */}
        <title>KIKI | Frontend Developer</title>
        <meta
          name="description"
          content="KIKI - Frontend Developer specializing in ReactJS, Next.js, and modern UI/UX design."
        />
        <meta name="keywords" content="KIKI, Frontend Developer, ReactJS, Next.js, Portfolio" />
        <meta name="author" content="KIKI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="KIKI | Frontend Developer" />
        <meta
          property="og:description"
          content="Portfolio of KIKI - React & Next.js Developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.vercel.app" />
        <meta property="og:image" content="/images/preview.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KIKI | Frontend Developer" />
        <meta
          name="twitter:description"
          content="Portfolio of KIKI - React & Next.js Developer."
        />
        <meta name="twitter:image" content="/images/preview.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider>
        <I18nProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </I18nProvider>
      </ThemeProvider>
    </>
  );
}