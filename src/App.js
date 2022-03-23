import React, { useContext } from 'react';

import { AppContext } from './AppContext';

import DivNavBar from './containers/DivNavBar';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Footer from './pages/Footer';

import Login from './pages/Login';

import './styles/App.css';

const App = () => {

  const { isDark, isLogged } = useContext( AppContext );
  const mode = isDark ? "App darkMode" : "App lightMode";

  return (
      <div className={mode}>
        <DivNavBar />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Footer />

        { isLogged ? <Login /> : null }
      </div>
  );
}

export default App;
