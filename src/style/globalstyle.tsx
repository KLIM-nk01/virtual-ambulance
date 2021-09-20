import { STYLE_CONSTANTS } from '../constants/styleConstants';
import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    ${fonts};
    font-family: 'Poppins', sans-serif;
    color: ${STYLE_CONSTANTS.COLORS.black};
    text-decoration: none;
  }
  #root{
    margin:0 auto;
  }
`;

export default GlobalStyle;
