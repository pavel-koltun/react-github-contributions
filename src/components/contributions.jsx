import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { resetCells } from '../actions';
import ContributionsMonths from './contributions_months';
import Rectangle from '../containers/rectangle';
import ContributionsFooter from './contributions_footer';

class Contributions extends React.Component {

  render() {
    return (
      <div className="contributions container-flex column-nowrap">
        <ContributionsMonths dates={this.props.dates} daysInColumn={7} />
        <div className="container-flex column-nowrap">
          <div className="container-flex row-nowrap">
            {_.chunk(this.props.dates, 7).map((weekDates, columnIndex) =>
              <div
                key={columnIndex}
                className="container-flex column-nowrap" style={{ width: '12px' }}>
                {weekDates.map((date, rowIndex) =>
                  <Rectangle key={rowIndex} date={date.format('YYYY-MM-DD')} />
                )}
              </div>)}
          </div>
          <ContributionsFooter onResetClick={this.props.resetCells} />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  dates: state.dates,
  year: state.year,
}), { resetCells })(Contributions);
