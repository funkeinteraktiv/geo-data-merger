import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,700,900');

  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.darkBackground};
  }

  body, html {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;
