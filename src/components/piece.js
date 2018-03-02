import { Component } from 'react';
import chessUtils from './utility';

class Piece extends Component {
  constructor(props) {
    super(props);

    this.onPieceClick = this.onPieceClick.bind(this);
  }

  onPieceClick() {
    const moves = this.getAllMoves();

    this.props.onPieceClick(moves);
  }

  getColor(){
    return chessUtils.getPieceColor(this.props.name);
  }

  getAllMoves() {
    const pos = this.props.position;
    const [ row, col ] = chessUtils.chessNotationToIndices(pos);

    const movesCoordinates = this.moves(row, col); // defined in subclass

    const chessMoves = movesCoordinates.map(move => {
      const [ row, col ] = move;
      return chessUtils.indicesToChessNotation(row, col);
    });

    return chessMoves;
  }
}

export default Piece;