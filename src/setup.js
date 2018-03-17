import React, { Component } from 'react';
import pawn_white from './assets/pawn_white.svg';
import pawn_black from './assets/pawn_black.svg';

class Setup extends Component {
  constructor(props){
    super(props);

    this.state = {
      color: '',
      opponent: '',
      allOptionsSelected: undefined
    }

    this._submitSetup = this._submitSetup.bind(this);
  }

  chooseColor(color) {
    this.setState({ color: color });
  }

  chooseOpponent(opponent) {
    this.setState({ opponent: opponent });
  }

  _submitSetup() {
    if (this.state.opponent && this.state.color) {
      this.props.start(this.state.opponent, this.state.color)
    } else {
      this.setState({ allOptionsSelected: false });
    }
  }

  render() {
    const colorWhite = this.state.color === 'white' ? 'selected' : '';
    const colorBlack = this.state.color === 'black' ? 'selected' : '';
    const opponentHuman = this.state.opponent === 'player' ? 'selected' : '';
    const opponentComputer = this.state.opponent === 'computer' ? 'selected' : '';

    return (
      <div className='setup'>
        {
          this.state.allOptionsSelected === false
          ? <p className='setup__notifier'>
              Please select all options before starting a game!
            </p>
          : null
        }
        <div className='setup__option'>
          <p className='setup__option__title'>Choose your color</p>
          <div className='setup__option__options'>
            <div className={'setup__option__chooser ' + colorWhite } onClick={() => this.chooseColor('white')}>
              <img src={pawn_white} alt='pawn_white'/>
            </div>
            <div className={'setup__option__chooser ' + colorBlack} onClick={() => this.chooseColor('black')}>
              <img src={pawn_black} alt='pawn_black'/>
            </div>
          </div>
        </div>
        <div className='setup__option'>
          <p className='setup__option__title'>Choose your opponent</p>
          <div className='setup__option__options'>
            <div className={'setup__option__chooser ' + opponentHuman} onClick={() => this.chooseOpponent('player')}>
              <p>Player</p>
            </div>
            <div className={'setup__option__chooser ' + opponentComputer} onClick={() => this.chooseOpponent('computer')}>
              <p>Computer</p>
            </div>
          </div>
        </div>
        <div className='setup__submit' onClick={() => this._submitSetup()}>
          Start!
        </div>
      </div>
    );
  }
}

export default Setup;