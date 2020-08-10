import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js';
import UsersContainer from './containers/UsersContainer.js'

function App() {
  return (
    <div className="App">
    <MainContainer/>
    <UsersContainer/>
    </div>
  );
}

export default App;
