import React from 'react';
import Piece from './piece';
import chessUtils from './utility';

import queen_white from '../assets/queen_white.svg';
import queen_black from '../assets/queen_black.svg';

class Queen extends Piece {
  moves(row, col) {
    const queen = this;
    const moves = [];
    const color = this.getColor();
    const directions = {
      up: { y: -1, x: 0 },
      down: { y: 1, x: 0 },
      left: { y: 0, x: -1 },
      right: { y: 0, x: 1 },
      leftup: { y: -1, x: -1 },
      leftdown: { y: 1, x: -1 },
      rightup: { y: -1, x: 1 },
      rightdown: { y: 1, x: 1 },
    }

    addDirection('leftup');
    addDirection('leftdown');
    addDirection('rightup');
    addDirection('rightdown');
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

        const field = queen.props.getField(dirY, dirX);

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
    const image = this.getColor() === 'white' ? queen_white : queen_black;
    return (
      <div className='queen' onClick={this.onPieceClick}>
        <img src={image} alt='queen'/>
      </div>
    )
  }
}

export default Queen;