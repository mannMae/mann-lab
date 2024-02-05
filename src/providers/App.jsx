import { GlobalStyle, theme } from 'libraries/styled';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'libraries/reduxToolkit';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export const AppProvider = ({ children }) => {
  const persistor = persistStore(store);
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  );
};
