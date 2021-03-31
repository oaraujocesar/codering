import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>React Avançado - Boilerplate</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="A simple starter project to work with TypeScript, React, NextJS and Styled Components"
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
