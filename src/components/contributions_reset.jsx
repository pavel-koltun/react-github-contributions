import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const ContributionsReset = ({ onResetClick, hasChanges }) => {
  if (hasChanges) {
    return (
      <button onClick={onResetClick} className="button reset">Reset</button>
    );
  }

  return <div />;
};

export default connect(state => ({ hasChanges: !_.isEmpty(state.styles) }))(ContributionsReset);
