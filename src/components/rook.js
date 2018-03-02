import React from 'react';
import Piece from './piece';
import chessUtils from './utility';

import rook_white from '../assets/rook_white.svg';
import rook_black from '../assets/rook_black.svg';

class Rook extends Piece {
  moves(row, col) {
    const rook = this;
    const moves = [];
    const color = this.props.color;
    const directions = {
      up: { y: -1, x: 0 },
      down: { y: 1, x: 0 },
      left: { y: 0, x: -1 },
      right: { y: 0, x: 1 },
    }

    addDirection('up');
    addDirection('down');
    addDirection('left');
    addDirection('right');

    return moves;

    function addDirection(direction) {
      const { x, y } = directions[direction];
      const boardsize = 8;

      for (let i = 1; i < boardsize; i++){
        const dirX = col + x * i;
        const dirY = row + y * i;
        const nextDir = [dirY, dirX];

        if (!chessUtils.fieldExists(dirY, dirX)) {
          break;
        }

        const field = rook.props.getField(dirY, dirX);

        if (chessUtils.isFieldBlockedByColor(field, color)) {
          break;
        } else if (chessUtils.isFieldOccupied(field)) {
          moves.push(nextDir);
          break;
        }

        moves.push(nextDir);
      }
    }
  }

  render() {
    const image = this.props.color === 'white' ? rook_white : rook_black;
    return (
      <div className='rook' onClick={this.onPieceClick}>
        <img src={image} alt='rook'/>
      </div>
    )
  }
}

export default Rook;