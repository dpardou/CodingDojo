import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import Home from './components/home';
import Variable from './components/variable';
import VariableColor from './components/variableColor';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Variable path="/:variable"/>
        <VariableColor path="/:variable/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;

