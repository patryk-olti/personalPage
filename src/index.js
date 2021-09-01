import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import AppProvider from './AppContext';

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
  ,
  document.getElementById('root')
);
