import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  :root {
      iframe#webpack-dev-server-client-overlay{display:none!important};
    }
`;

export default Global;
