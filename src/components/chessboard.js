import React, { Component } from 'react';
import Field from './field';
import CapturedPieces from './capturedPieces';

import chessUtils from './utility';

class Chessboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      turn: 'white',
      moves: [],
      board: this.initBoard(),
      highlightedFields: [],
      selectedPiece: {
        piece: undefined,
        position: '',
        color: ''
      },
      whitesCapturedPieces: [],
      blacksCapturedPieces: [],
    };

    this._showMoves = this._showMoves.bind(this);
    this._getField = this._getField.bind(this);
    this._selectPiece = this._selectPiece.bind(this);
  }

  initBoard(){
    return [
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['',  '',  '',  '',  '',  '',  '',  ''],
      ['',  '',  '',  '',  '',  '',  '',  ''],
      ['',  '',  '',  '',  '',  '',  '',  ''],
      ['',  '',  '',  '',  '',  '',  '',  ''],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ];
  }

  getLoggedMove(piece, pieceFrom, pieceTo, pieceCaptured, checkAfter) {
    const captured = pieceCaptured ? 'x' : '';
    const check = checkAfter ? '+' : '';
    const name = (piece === 'p' || piece === 'P') ? piece.toLowerCase() : piece.toUpperCase();

    return name + pieceFrom + pieceTo + captured + check;
  }

  makeMove(fromField, toField){
    const [fromY, fromX] = chessUtils.chessNotationToIndices(fromField);
    const [toY, toX] = chessUtils.chessNotationToIndices(toField);
    const piece = this.state.board[fromY][fromX];
    const board = this.state.board.slice(0);
    const nextTurn = this.state.turn === 'white' ? 'black' : 'white';
    const whitesCapturedPieces = this.state.whitesCapturedPieces.slice(0);
    const blacksCapturedPieces = this.state.blacksCapturedPieces.slice(0);

    if (board[toY][toX] !== '') {
      const pieceCaptured = board[toY][toX];
      const colorCaptured = chessUtils.getPieceColor(pieceCaptured);
      if (colorCaptured === 'white') {
        blacksCapturedPieces.push(pieceCaptured);
      } else if (colorCaptured === 'black') {
        whitesCapturedPieces.push(pieceCaptured);
      }
    }

    board[fromY][fromX] = '';
    board[toY][toX] = piece;

    this.setState({
      turn: nextTurn,
      selectedPiece: {
        piece: undefined,
        position: '',
        color: ''
      },
      highlightedFields: [],
      whitesCapturedPieces,
      blacksCapturedPieces,
      board,
    });
  }

  _selectPiece(piece, position) {
    const color = chessUtils.getPieceColor(piece);

    // check if field selected isn't a piece of the player's color
    if(this.state.selectedPiece.color !== color && this.state.selectedPiece.piece !== undefined) {
      const fromField = this.state.selectedPiece.position;
      const toField = position;

      // check if field clicked is a valid move
      if(this.state.highlightedFields.indexOf(toField) !== -1){
        // make the move
        this.makeMove(fromField, toField);
      }
    } else {
      // select a new piece
      this.setState({
        selectedPiece: {
          piece,
          position,
          color
        }
      });
    }
  }

  _showMoves(moves) {
    this.setState({ highlightedFields: moves });
  }

  _getField(row, col) {
    if (!chessUtils.fieldExists(row, col)) return undefined;

    return this.state.board[row][col];
  }

  getBoard(){
    let fullBoard = this.state.board.map((row, row_index) => {
      return <div key={row_index} className='chessboard__row'>
        {
         row.map((piece, col_index) => {
            const chessPosition = chessUtils.indicesToChessNotation(row_index, col_index);
            const fieldColor = chessUtils.getFieldColor(row_index, col_index);
            const highlighted = this.state.highlightedFields.indexOf(chessPosition) !== -1;
            const color = chessUtils.getPieceColor(piece);

            return <Field key={chessPosition}
                          name={piece}
                          color={color}
                          highlighted={highlighted}
                          position={chessPosition}
                          fieldColor={fieldColor}
                          getField={(row, col) => this._getField(row, col)}
                          onPieceClick={(moves)=> this._showMoves(moves)}
                          select={(piece, pos) => this._selectPiece(piece, pos)}/>;
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
      <div className='game'>
        <div className='chessboard'>
          { this.getBoard() }
        </div>
        <CapturedPieces white={this.state.whitesCapturedPieces} black={this.state.blacksCapturedPieces}/>
      </div>
    )
  }
}

export default Chessboard;