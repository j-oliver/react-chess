import React, { Component } from 'react';

import King from './king';
import Queen from './queen';
import Rook from './rook';
import Bishop from './bishop';
import Knight from './knight';
import Pawn from './pawn';


class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: false
    }

    this.highlight = this.highlight.bind(this);
  }

  getPiece() {
    switch(this.props.name.toLowerCase()) {
      case 'k': return <King color={this.props.pieceColor}/>;
      case 'q': return <Queen color={this.props.pieceColor}/>;
      case 'r': return <Rook color={this.props.pieceColor}/>;
      case 'b': return <Bishop color={this.props.pieceColor}/>;
      case 'n': return <Knight color={this.props.pieceColor}/>;
      case 'p': return <Pawn color={this.props.pieceColor}/>;
      default: return undefined;
    }
  }

  highlight() {
    this.setState({ highlighted: true });
  }

  render(){
    return (
      <div className={`field ${this.props.fieldColor}`} onClick={this.highlight}>
        { this.getPiece() }
        {
          this.state.highlighted
          ? <div className='highlight'/>
          : undefined
        }
      </div>
    );
  }
}

export default Field;