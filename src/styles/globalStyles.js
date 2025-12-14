import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: #FFFFFF;
    color: ${props => props.theme.colors.deepSpaceBlue};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  .lucida-fax {
    font-family: 'Lucida Fax', 'Times New Roman', serif;
  }
`;