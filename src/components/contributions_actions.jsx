import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { resetCells, generateScript } from '../actions';

class ContributionsActions extends React.Component {
  constructor(args) {
    super(args);

    this.onGenerateClick = this.onGenerateClick.bind(this);
  }

  onGenerateClick() {
    this.props.generateScript({
      dates: this.props.dates,
      styles: this.props.styles,
    });
  }

  render() {
    if (!this.props.hasChanges) {
      return (<div className="contributions-actions" />);
    }

    return (
      <div className="contributions-actions">
        <button onClick={this.props.resetCells}>Reset</button>
        <button onClick={this.onGenerateClick}>Generate</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    hasChanges: !_.isEmpty(state.styles),
    dates: state.dates,
    styles: state.styles,
  }),
  ({ resetCells, generateScript }))(ContributionsActions);
