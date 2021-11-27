import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eeeeee;
    
    --container: 120rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Encode Sans', sans-serif;
  }

  p, a, button {
    font-family: 'Encode Sans', sans-serif;
  }

  h1 {
    font-family: 'Sora', sans-serif;
  }

  ::-moz-selection {
    color: white;
    background: #FF3366;
  }

  ::selection {
    color: white;
    background: #FF3366;
  }

  .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
`

export default GlobalStyles
