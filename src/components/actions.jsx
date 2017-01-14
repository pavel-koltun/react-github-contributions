import React from 'react';
import { connect } from 'react-redux';

import { resetCells as resetCellsAction } from '../actions';

const Actions = ({ resetCells }) =>
  <button tabIndex={0} onClick={resetCells}>Reset</button>;

Actions.propTypes = {
  resetCells: React.PropTypes.func.isRequired,
};

export default connect(null, { resetCells: resetCellsAction })(Actions);
