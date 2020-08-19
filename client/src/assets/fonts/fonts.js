import { createGlobalStyle } from 'styled-components';
import octupleWoff from './webfontkit/octuple-max-demo-webfont.woff';
import octupleWoff2 from './webfontkit/octuple-max-demo-webfont.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: "octuple_maxregular";
    src: local(octuple_maxregular),
    url(${octupleWoff}) format("woff");
    url(${octupleWoff2}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;