import { createGlobalStyle } from 'styled-components';
import { COLORS } from './Theme';


const GlobalStyles = createGlobalStyle`
    * {
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      text-decoration: none;
    }
    
    h1{
      font-size: 30px;
    }

    p {
        font-size: 16px;
    }

    a {
        color: ${COLORS.primary};
    }
`;

export default GlobalStyles;