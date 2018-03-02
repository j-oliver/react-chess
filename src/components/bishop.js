import React from 'react';
import Piece from './piece';
import chessUtils from './utility';

import bishop_white from '../assets/bishop_white.svg';
import bishop_black from '../assets/bishop_black.svg';

class Bishop extends Piece {
  moves(row, col) {
    const bishop = this;
    const moves = [];
    const color = this.props.color;
    const directions = {
      leftup: { y: -1, x: -1 },
      leftdown: { y: 1, x: -1 },
      rightup: { y: -1, x: 1 },
      rightdown: { y: 1, x: 1 },
    }

    addDirection('leftup');
    addDirection('leftdown');
    addDirection('rightup');
    addDirection('rightdown');

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

        const field = bishop.props.getField(dirY, dirX);

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
    const image = this.props.color === 'white' ? bishop_white : bishop_black;
    return (
      <div className='bishop' onClick={this.onPieceClick}>
        <img src={image} alt='bishop'/>
      </div>
    )
  }
}

export default Bishop;