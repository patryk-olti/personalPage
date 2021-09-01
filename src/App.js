
import AppProvider from './AppContext';
import DivNavBar from './containers/DivNavBar';

import './styles/App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <DivNavBar />
        elo
      </div>
    </AppProvider>
  );
}

export default App;
