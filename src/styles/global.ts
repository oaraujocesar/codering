import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

  }

  html, body {
    height: 100%;
  }

  #__next {
    display: flex;
    width: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  @font-face {
  font-family: "FuturaPT";
  src: url("/fonts/FuturaPT/FuturaPTBold.otf");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 970px;
`

export default GlobalStyles
