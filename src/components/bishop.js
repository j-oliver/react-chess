import React, { Component } from 'react';

import bishop_white from '../assets/bishop_white.svg';
import bishop_black from '../assets/bishop_black.svg';

class Bishop extends Component {
  render() {
    const image = this.props.color === 'white' ? bishop_white : bishop_black;
    return (
      <div className='bishop'>
        <img src={image} alt='bishop'/>
      </div>
    )
  }
}

export default Bishop;