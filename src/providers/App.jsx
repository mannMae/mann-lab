import { GlobalStyle, theme } from 'libraries/styled';
import { ThemeProvider } from 'styled-components';

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
