import React, { Component } from 'react';
import './App.css';
import Chessboard from './components/chessboard';
import ColorDecider from './colordecider';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerDecidedColor: false,
      playerColor: ''
    }
  }

  _decideColor(color) {
    this.setState({
      playerDecidedColor: true,
      playerColor: color
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>React Chess</h1>
        {
          this.state.playerDecidedColor
          ? <Chessboard color={this.state.playerColor}/>
          : <ColorDecider decideColor={(color) => this._decideColor(color)}/>
        }
      </div>
    );
  }
}

export default App;
