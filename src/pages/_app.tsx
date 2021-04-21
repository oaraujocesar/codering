import React, { useReducer } from 'react'
import styled from 'styled-components'

import Head from 'next/head'
import { AppProps } from 'next/app'

import GlobalStyles from 'styles/global'
import { ThemeContext } from '../context/theme'
import { ThemeProvider } from 'styled-components'
import { initialState, reducer } from '../reducers/themeReducer'

import Menu from 'components/Menu'

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { currentTheme } = state

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ ...state, dispatch }}>
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
        <Menu />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
