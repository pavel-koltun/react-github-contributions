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
      return (<div className="container-flex" />);
    }

    return (
      <div className="container-flex">
        <button onClick={this.props.resetCells} className="button reset">Reset</button>
        <button onClick={this.onGenerateClick} className="button">Generate</button>
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
