import React, { Component } from 'react';

import pawn_white from '../assets/pawn_white.svg';
import pawn_black from '../assets/pawn_black.svg';

class Pawn extends Component {
  render() {
    const image = this.props.color === 'white' ? pawn_white : pawn_black;
    return (
      <div className='pawn'>
        <img src={image} alt='pawn'/>
      </div>
    )
  }
}

export default Pawn;