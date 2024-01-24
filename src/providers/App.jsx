import { GlobalStyle, theme } from 'libraries/styled';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};
