import React from 'react';
import Piece from './piece';
import chessUtils from './utility';

import knight_white from '../assets/knight_white.svg';
import knight_black from '../assets/knight_black.svg';

class Knight extends Piece {
  moves(row, col) {
    let moves = [
      [row - 1, col - 2], [row - 2, col - 1], // leftup
      [row - 2, col + 1], [row - 1, col + 2], // rightup
      [row + 1, col - 2], [row + 2, col - 1], // leftdown
      [row + 1, col + 2], [row + 2, col + 1], // rightdown
    ];

    const color = this.getColor();
    const knight = this;

    moves = moves.filter(move => {
      const [row, col] = move;

      if (!chessUtils.fieldExists(row, col)) {
        return false;
      }

      const field = knight.props.getField(row, col);

      if (chessUtils.isFieldBlockedByColor(field, color)){
        return false;
      }
      return true;
    });

    return moves;
  }

  render() {
    const image = this.getColor() === 'white' ? knight_white : knight_black;
    return (
      <div className='knight' onClick={this.onPieceClick}>
        <img src={image} alt='knight'/>
      </div>
    )
  }
}

export default Knight;