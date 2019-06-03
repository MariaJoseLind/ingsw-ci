import React from 'react';
import './App.css';
import Groups from './components/index'
import info from './components/information'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1 className="app-tittle">GRUPOS DE ING de SW</h1>
      <Groups
        info={info}
      />
    </div>
  );
}

export default App;
