import React from 'react';
import Piece from './piece';
import chessUtils from './utility';

import king_white from '../assets/king_white.svg';
import king_black from '../assets/king_black.svg';

class King extends Piece {
  moves(row, col){
    let moves = [
      [row - 1, col - 1], // leftup
      [row - 1, col],     // up
      [row - 1, col + 1], // rightup
      [row, col - 1],     // left
      [row, col + 1],     // right
      [row + 1, col - 1], // leftdown
      [row + 1, col],     // down
      [row + 1, col + 1], // rightdown
    ];

    const color = this.getColor();
    const king = this;

    moves = moves.filter(move => {
      const [row, col] = move;

      if (!chessUtils.fieldExists(row, col)) {
        return false;
      }

      const field = king.props.getField(row, col);

      if (chessUtils.isFieldBlockedByColor(field, color)){
        return false;
      }
      return true;
    });

    return moves;
  }

  render() {
    const image = this.getColor() === 'white' ? king_white : king_black;
    return (
      <div className='king' onClick={this.onPieceClick}>
        <img src={image} alt='king'/>
      </div>
    )
  }
}

export default King;