import React, { Component } from 'react';

import king_white from '../assets/king_white.svg';
import king_black from '../assets/king_black.svg';

class King extends Component {
  render() {
    const image = this.props.color === 'white' ? king_white : king_black;
    return (
      <div className='king'>
        <img src={image} alt='king'/>
      </div>
    )
  }
}

export default King;