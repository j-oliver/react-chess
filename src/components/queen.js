import React, { Component } from 'react';

import queen_white from '../assets/queen_white.svg';
import queen_black from '../assets/queen_black.svg';

class Queen extends Component {
  render() {
    const image = this.props.color === 'white' ? queen_white : queen_black;
    return (
      <div className='queen'>
        <img src={image} alt='queen'/>
      </div>
    )
  }
}

export default Queen;