import React from 'react';
import { connect } from 'react-redux';
import { cellClick } from '../actions';

class Rectangle extends React.Component {

  constructor(args) {
    super(args);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.cellClick(this.props.cellId);
  }

  render() {
    return (
      <span
        className={`rectangle rectangle-${this.props.styleIndex}`}
        onClick={this.onClick}
      />
    );
  }
}

Rectangle.propTypes = {
  cellClick: React.PropTypes.func.isRequired,
  cellId: React.PropTypes.string.isRequired,
  styleIndex: React.PropTypes.number.isRequired,
};

Rectangle.defaultProps = {
  styleIndex: 1,
};

export default connect((state, ownProps) => ({
  styleIndex: state.styles[ownProps.cellId],
}), { cellClick })(Rectangle);
