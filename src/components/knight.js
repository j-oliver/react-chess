import React, { Component } from 'react';

import knight_white from '../assets/knight_white.svg';
import knight_black from '../assets/knight_black.svg';

class Knight extends Component {
  render() {
    const image = this.props.color === 'white' ? knight_white : knight_black;
    return (
      <div className='knight'>
        <img src={image} alt='knight'/>
      </div>
    )
  }
}

export default Knight;