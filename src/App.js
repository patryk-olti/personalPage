import React, { useContext } from 'react';

import { AppContext } from './AppContext';

import DivNavBar from './containers/DivNavBar';
import About from './pages/About';
import Skills from './pages/Skills';

import './styles/App.css';

const App = () => {

  const { isDark } = useContext( AppContext );
  const mode = isDark ? "App darkMode" : "App lightMode";

  return (
      <div className={ mode } >
        <DivNavBar />
        <About />
        <Skills />
      </div>
  );
}

export default App;
