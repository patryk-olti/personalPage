import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import AppProvider from './AppContext';

import '../src/styles/App.css';

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
  ,
  document.getElementById('root')
);
