import React, { Component } from 'react';

import king_white from '../assets/king_white.svg';
import king_black from '../assets/king_black.svg';
import queen_white from '../assets/queen_white.svg';
import queen_black from '../assets/queen_black.svg';
import rook_white from '../assets/rook_white.svg';
import rook_black from '../assets/rook_black.svg';
import bishop_white from '../assets/bishop_white.svg';
import bishop_black from '../assets/bishop_black.svg';
import knight_white from '../assets/knight_white.svg';
import knight_black from '../assets/knight_black.svg';
import pawn_white from '../assets/pawn_white.svg';
import pawn_black from '../assets/pawn_black.svg';


function getImage(piece, key) {
  switch(piece) {
    case 'k': return <img key={key} src={king_black} alt='king_black'/>;
    case 'q': return <img key={key} src={queen_black} alt='queen_black'/>;
    case 'r': return <img key={key} src={rook_black} alt='rook_black'/>;
    case 'b': return <img key={key} src={bishop_black} alt='bishop_black'/>;
    case 'n': return <img key={key} src={knight_black} alt='knight_black'/>;
    case 'p': return <img key={key} src={pawn_black} alt='pawn_black'/>;
    case 'K': return <img key={key} src={king_white} alt='king_white'/>;
    case 'Q': return <img key={key} src={queen_white} alt='queen_white'/>;
    case 'R': return <img key={key} src={rook_white} alt='rook_white'/>;
    case 'B': return <img key={key} src={bishop_white} alt='bishop_white'/>;
    case 'N': return <img key={key} src={knight_white} alt='knight_white'/>;
    case 'P': return <img key={key} src={pawn_white} alt='pawn_white'/>;
    default: return;
  }
}

function sortByPieceValue(a, b) {
  const values = { q: 9, r: 5, b: 3, n: 3, p: 1, }

  return values[a.toLowerCase()] <= values[b.toLowerCase()];
}

class CapturedPieces extends Component {

  getCapturedPieces(from_color) {
    return this.props[from_color]
      .sort(sortByPieceValue)
      .map((piece, index) => getImage(piece, piece + index));
  }

  render() {
    return (
      <div className='capturedPieces'>
        <div className='capturedPieces__color'>
          <h3>White: </h3>
          { this.getCapturedPieces('white') }
        </div>
        <div className='capturedPieces__color'>
          <h3>Black: </h3>
          { this.getCapturedPieces('black') }
        </div>
      </div>
    );
  }
}

export default CapturedPieces;