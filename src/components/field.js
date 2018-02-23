import React, { Component } from 'react';

import King from './king';
import Queen from './queen';
import Rook from './rook';
import Bishop from './bishop';
import Knight from './knight';
import Pawn from './pawn';


class Field extends Component {
  getPiece() {
    switch(this.props.name.toLowerCase()) {
      case 'k':
        return <King name={this.props.name}
                     onPieceClick={this.props.onPieceClick}
                     position={this.props.position}
                     getField={this.props.getField}/>;
      case 'q':
        return <Queen name={this.props.name}
                     onPieceClick={this.props.onPieceClick}
                     position={this.props.position}
                     getField={this.props.getField}/>;
      case 'r':
        return <Rook name={this.props.name}
                     onPieceClick={this.props.onPieceClick}
                     position={this.props.position}
                     getField={this.props.getField}/>;
      case 'b':
        return <Bishop name={this.props.name}
                     onPieceClick={this.props.onPieceClick}
                     position={this.props.position}
                     getField={this.props.getField}/>;
      case 'n':
        return <Knight name={this.props.name}
                     onPieceClick={this.props.onPieceClick}
                     position={this.props.position}
                     getField={this.props.getField}/>;
      case 'p':
        return <Pawn name={this.props.name}
                     onPieceClick={this.props.onPieceClick}
                     position={this.props.position}
                     getField={this.props.getField}/>;
      default: return undefined;
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