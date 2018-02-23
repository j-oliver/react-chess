import React from 'react';
import Piece from './piece';
import chessUtils from './utility';

import pawn_white from '../assets/pawn_white.svg';
import pawn_black from '../assets/pawn_black.svg';

class Pawn extends Piece {
  isOnStartPosition() {
    const whiteStartRow = '2';
    const blackStartRow = '7';
    const color = this.getColor();

    return color === 'white'
      ? this.props.position[1] === whiteStartRow
      : this.props.position[1] === blackStartRow;
  }

  moves(row, col) {
    const moves = [];
    const color = this.getColor();

    let forward = [], doubleForward = [], beatRight = [], beatLeft = [];

    if (color === 'white') {
      forward = [row - 1, col];
      doubleForward = [row - 2, col];
      beatRight = [row - 1, col + 1]
      beatLeft = [row - 1, col - 1]
    }
    else {
      forward = [row + 1, col];
      doubleForward = [row + 2, col];
      beatRight = [row + 1, col + 1]
      beatLeft = [row + 1, col - 1]
    }

    const forwardField = this.props.getField(forward[0], forward[1]);
    const doubleForwardField = this.props.getField(doubleForward[0], doubleForward[1]);
    const beatRightField = this.props.getField(beatRight[0], beatRight[1]);
    const beatLeftField = this.props.getField(beatLeft[0], beatLeft[1]);

    if(!chessUtils.isFieldOccupied(forwardField)) {
      moves.push(forward);
      if (!chessUtils.isFieldOccupied(doubleForwardField) && this.isOnStartPosition()) {
        moves.push(doubleForward);
      }
    }
    if (beatRightField && !chessUtils.isFieldBlockedByColor(beatRightField, color)
      && chessUtils.isFieldOccupied(beatRightField)) {
      moves.push(beatRight);
    }
    if (beatLeftField && !chessUtils.isFieldBlockedByColor(beatLeftField, color)
      && chessUtils.isFieldOccupied(beatLeftField)) {
      moves.push(beatLeft);
    }

    return moves;
  }

  render() {
    const image = this.getColor() === 'white' ? pawn_white : pawn_black;
    return (
      <div className='pawn' onClick={this.onPieceClick}>
        <img src={image} alt='pawn'/>
      </div>
    )
  }
}

export default Pawn;