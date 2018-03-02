import React, { Component } from 'react';

import King from './king';
import Queen from './queen';
import Rook from './rook';
import Bishop from './bishop';
import Knight from './knight';
import Pawn from './pawn';
import EmptyField from './emptyfield';

const pieces = {
  k: King,
  q: Queen,
  r: Rook,
  b: Bishop,
  n: Knight,
  p: Pawn,
}

class Field extends Component {
  getPiece() {
    const identifier = this.props.name.toLowerCase();

    if(identifier in pieces) {
      return React.createElement(pieces[identifier], {
        name: this.props.name,
        color: this.props.color,
        onPieceClick: this.props.onPieceClick,
        position: this.props.position,
        getField: this.props.getField,
        select: this.props.select,
      });
    } else {
      return <EmptyField
        name={this.props.name}
        position={this.props.position}
        select={this.props.select}
      />;
    }
  }

  render(){
    return (
      <div className={`field ${this.props.fieldColor}`}>
        { this.getPiece() }
        {
          this.props.highlighted
          ? <div className='highlight'/>
          : undefined
        }
      </div>
    );
  }
}

export default Field;