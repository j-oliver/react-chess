import React, { Component } from 'react';
import pawn_white from './assets/pawn_white.svg';
import pawn_black from './assets/pawn_black.svg';

class ColorDecider extends Component {

  render() {
    return (
      <div className='colordecider'>
        <h2 className='colordecider_title'>Choose your color!</h2>
        <div className='colordecider_white' onClick={() => this.props.decideColor('white')}>
          <img src={pawn_white} alt='white_pawn'/>
        </div>
        <div className='colordecider_black' onClick={() => this.props.decideColor('black')}>
          <img src={pawn_black} alt='white_pawn'/>
        </div>
      </div>
    )
  }
}

export default ColorDecider;