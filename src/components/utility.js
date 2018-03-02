const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];

const chessUtils = {
  chessNotationToIndices: (chessnotation) => {
    const indices = chessnotation.split('');

    return [
      rows.indexOf(indices[1]),
      cols.indexOf(indices[0]),
    ];
  },

  indicesToChessNotation: (row, col) => {
    return cols[col] + rows[row];
  },

  getPieceColor: (piece) => {
    if (piece === '') return undefined;

    return piece.toUpperCase() === piece ? 'white' : 'black';
  },

  getFieldColor: (row, col) => {
    return (row % 2) === (col % 2) ? 'light' : 'dark';
  },

  fieldExists: (row, col) => {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  },

  isFieldOccupied: (field) => {
    return field !== '';
  },

  isFieldBlockedByColor: (field, color) => {
    if(field === '') return false;

    return color === 'white'
      ? field === field.toUpperCase()
      : field === field.toLowerCase()
  },

  fieldInFields: (field, fields) => {
    const fieldsString = JSON.stringify(fields);
    const fieldString = JSON.stringify(field);

    return fieldsString.indexOf(fieldString) !== -1;
  },
}

export default chessUtils;