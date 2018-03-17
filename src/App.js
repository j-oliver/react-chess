import React, { Component } from 'react';
import './App.css';
import Chessboard from './components/chessboard';
import Setup from './setup';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opponent: '',
      playerColor: '',
    }
  }

  _start(opponent, playerColor) {
    this.setState({ opponent, playerColor })
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>React Chess</h1>
        {
          (this.state.opponent && this.state.playerColor)
          ? <Chessboard opponent={this.state.opponent} color={this.state.playerColor}/>
          : <Setup start={(opponent, playerColor) => this._start(opponent, playerColor)}/>
        }
      </div>
    );
  }
}

export default App;
