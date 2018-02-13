import React, { Component } from 'react';
import Field from './field';

// import King from './king';
// import Queen from './queen';
// import Rook from './rook';
// import Knight from './knight';
// import Bishop from './bishop';
// import Pawn from './pawn';

class Chessboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      turn: 'white',
      moves: [],
      board: this.initBoard()
    };
  }

  initBoard(){
    const startboard = [
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ];

    return startboard.map((row, row_index) => {
      return row.map((piece, col_index) => {
        const chessPosition = this.indicesToChessNotation(row_index, col_index);
        const fieldColor = this.getFieldColor(row_index, col_index);
        const pieceColor = this.getPieceColor(piece);

        return <Field key={chessPosition} name={piece} fieldColor={fieldColor} pieceColor={pieceColor}/>;
      });
    });
  }

  chessNotationToIndices(chessnotation) {
    const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];
    const indices = chessnotation.split('');

    return {
      col: cols.indexOf(indices[0]),
      row: rows.indexOf(indices[1]),
    }
  }

  indicesToChessNotation(row, col) {
    const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];

    return cols[col] + rows[row];
  }

  getPieceColor(piece) {
    if (piece === '') return undefined;

    return piece.toUpperCase() === piece ? 'white' : 'black';
  }

  getFieldColor(row, col) {
    return (row % 2) === (col % 2) ? 'light' : 'dark';
  }

  getField(row, col) {
    return this.state.board[row][col];
  }

  getFieldByChessNotation(chessnotation) {
    const indices = this.chessNotationToIndices(chessnotation);
    return this.state.board[indices.row][indices.col];
  }

  render() {
    return (
      <div className='chessboard'>
        {
          this.state.board.map((row, index) => (
            <div key={index} className='chessboard__row'>
             {row}
            </div>
          ))
        }
      </div>
    )
  }
}

export default Chessboard;