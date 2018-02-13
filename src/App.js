import React, { Component } from 'react';
import './App.css';
import Chessboard from './components/chessboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'>React Chess</h1>
        <Chessboard/>
      </div>
    );
  }
}

export default App;
