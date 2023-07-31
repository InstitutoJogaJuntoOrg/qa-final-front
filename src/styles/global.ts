import { createGlobalStyle } from "styled-components";
import "keen-slider/keen-slider.min.css"
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  border-radius: 25px;
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #edf2f4;
  border-radius: 25px;
  cursor: pointer;
}

*::-webkit-scrollbar-thumb {
  background: #FCD700;
  cursor: pointer;
  border-radius: 25px;
}
`;

export default GlobalStyle;
