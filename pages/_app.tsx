import { useEffect, ReactNode, useState } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { getProviders, SessionProvider } from 'next-auth/react'

import { AppProvider } from 'context/app'
import { Modals, NavBar } from 'components'
import 'styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [icons, setIcons] = useState<[]>([])
  const [providers, setProviders] = useState()

  useEffect(() => {
    (async () => {
      const icons = await fetch('/json/icons.json')
      const json = await icons.json()
      const gotProviders = await getProviders()
      setProviders(gotProviders)
      setIcons(json)
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Siempre En Casa | Demo</title>
        <link href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`} rel="icon" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=0" />
        <meta name="theme-color" content="magenta" />
        <meta name="description" content="Facundo Cachan" />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon-32x32.png`}
        />
        <meta name="application-name" content="Facundo Cachan - PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="apple-touch-icon"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon-32x32.png`}
        />
        {icons.map(({ src, sizes }, index: number) => (
          <link
            key={index}
            rel="apple-touch-icon"
            sizes={sizes}
            href={`${process.env.NEXT_PUBLIC_URL}/img/${src}`}
          />
        ))}
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon-32x32.png`}
        />
        <link
          rel="manifest"
          href={`${process.env.NEXT_PUBLIC_URL}/manifest.webmanifest`}
        />
        <link
          rel="mask-icon"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon-32x32.png`}
          color="transparent"
        />
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon-32x32.png`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://facundo-cachan.dev" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta
          name="twitter:image"
          content="https://facundo-cachan.dev/img/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@Facundo-Cachan" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Facundo Cachan" />
        <meta
          property="og:description"
          content="Facundo Cachan Software Developer"
        />
        <meta property="og:site_name" content="Facundo Cachan" />
        <meta property="og:url" content="https://facundo-cachan.dev" />
        <meta
          property="og:image"
          content="https://facundo-cachan.dev/img/yo.svg"
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALITYCS}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALITYCS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <AppProvider>
          <NavBar providers={providers} />
          {getLayout(<Component {...pageProps} loading={true} />)}
          <Modals.Default />
        </AppProvider>
      </SessionProvider>
    </>
  )
}

export default App
