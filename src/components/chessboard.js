import React, { Component } from 'react';
import Field from './field';

import chessUtils from './utility';

class Chessboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      turn: 'white',
      moves: [],
      board: this.initBoard(),
      highlightedFields: []
    };

    this._showMoves = this._showMoves.bind(this);
    this._getField = this._getField.bind(this);
  }



  initBoard(){
    return [
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ];
  }

  _showMoves(moves) {
    this.setState({ highlightedFields: moves });
  }

  _getField(row, col) {
    // if (!chessUtils.fieldInBoard(row, col)) return undefined;
    return this.state.board[row][col];
  }

  getFieldByChessNotation(chessnotation) {
    const indices = chessUtils.chessNotationToIndices(chessnotation);
    return this.state.board[indices.row][indices.col];
  }

  getBoard(){
    let fullBoard = this.state.board.map((row, row_index) => {
      return <div key={row_index} className='chessboard__row'>
        {
         row.map((piece, col_index) => {
            const chessPosition = chessUtils.indicesToChessNotation(row_index, col_index);
            const fieldColor = chessUtils.getFieldColor(row_index, col_index);
            const highlighted = this.state.highlightedFields.indexOf(chessPosition) !== -1;

            return <Field key={chessPosition}
                          name={piece}
                          highlighted={highlighted}
                          position={chessPosition}
                          fieldColor={fieldColor}
                          getField={(row, col) => this._getField(row, col)}
                          onPieceClick={(moves)=> this._showMoves(moves)}/>;
         }, this)
       }
      </div>
    }, this);

    if(this.props.color === 'black') {
      fullBoard = fullBoard.reverse();
    }

    return fullBoard;
  }


  render() {
    return (
      <div className='chessboard'>
        { this.getBoard() }
      </div>
    )
  }
}

export default Chessboard;