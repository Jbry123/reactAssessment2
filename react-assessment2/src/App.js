import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return ( // update container names later for clarity?
      <div className="App">
        <div className="TodoContainer">
          <div className="ContainerLeft">
            <h2> TODO APP CONTAINER LEFT</h2>
          </div>
          <div className="ContainerRight"> 
            <h2> TODO APP CONTAINER RIGHT</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
