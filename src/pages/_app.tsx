import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>
        Codering - Sua melhor fonte de informação sobre desenvolvimento
      </title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="Um blog para espalhar conhecimento sobre tecnologia de maneira descomplicada e interativa."
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
