import React, { Component } from 'react';

import rook_white from '../assets/rook_white.svg';
import rook_black from '../assets/rook_black.svg';

class Rook extends Component {
  render() {
    const image = this.props.color === 'white' ? rook_white : rook_black;
    return (
      <div className='rook'>
        <img src={image} alt='rook'/>
      </div>
    )
  }
}

export default Rook;