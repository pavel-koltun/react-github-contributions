import React from 'react';
import { connect } from 'react-redux';

import { cellClick } from '../actions';

class Rectangle extends React.Component {

  constructor(args) {
    super(args);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.cellClick(this.props.date);
  }

  render() {
    return (
      <div>
        <div
          onMouseDown={this.onClick}
          data-tip={this.props.date}
          className={`rectangle rectangle-${this.props.styleIndex}`}
        />
      </div>

    );
  }
}

Rectangle.propTypes = {
  cellClick: React.PropTypes.func.isRequired,
  date: React.PropTypes.string.isRequired,
  styleIndex: React.PropTypes.number.isRequired,
};

Rectangle.defaultProps = {
  styleIndex: 1,
};

export default connect((state, ownProps) => ({
  styleIndex: state.styles[ownProps.date],
}), { cellClick })(Rectangle);
