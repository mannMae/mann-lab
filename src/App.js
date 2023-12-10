import { AppProvider } from 'providers/App';
import { Home } from 'routes/App';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
