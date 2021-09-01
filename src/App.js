
import AppProvider from './AppContext';
import DivNavBar from './containers/DivNavBar';

import About from './pages/About';

import './styles/App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <DivNavBar />
        <About />
      </div>
    </AppProvider>
  );
}

export default App;
