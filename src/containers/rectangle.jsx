import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { cellClick, DATE_FORMAT } from '../actions';

class Rectangle extends React.Component {

  constructor(args) {
    super(args);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!_.isEmpty(this.props.date)) {
      this.props.cellClick(this.props.date);
    }
  }

  render() {
    const { date } = this.props;
    const dateTip = date.format ? date.format(DATE_FORMAT) : null;

    return (
      <div
        onMouseDown={this.onClick}
        data-tip={dateTip}
        data-delay-show="500"
        className={`rectangle rectangle-${this.props.styleIndex}`}
      />
    );
  }
}

Rectangle.propTypes = {
  cellClick: React.PropTypes.func.isRequired,
  date: React.PropTypes.object.isRequired,
  styleIndex: React.PropTypes.number,
};

Rectangle.defaultProps = {
  styleIndex: 1,
};

export default connect((state, ownProps) => ({
  styleIndex: _.isEmpty(ownProps.date) ? null : state.styles[ownProps.date.format(DATE_FORMAT)],
}), { cellClick })(Rectangle);
