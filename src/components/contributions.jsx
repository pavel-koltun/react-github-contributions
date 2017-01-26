import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Days from './days';
import ContributionsMonths from './contributions_months';
import Rectangle from '../containers/rectangle';
import ContributionsFooter from './contributions_footer';

class Contributions extends React.Component {

  render() {

    const dates = _.concat(
      _.range(0, this.props.dates[0].day()).map(() => ({})),
      this.props.dates,
    );

    return (
      <div className="contributions-panel">
        <Days />
        <div className="contributions">
          <ContributionsMonths dates={dates} daysInColumn={7} />
          <div className="container-flex column-nowrap">
            <div className="container-flex row-nowrap">
              {_.chunk(dates, 7).map((weekDates, columnIndex) =>
                <div
                  key={columnIndex}
                  className="container-flex column-nowrap column">
                  {weekDates.map((date, rowIndex) =>
                    <Rectangle key={rowIndex} date={date} />
                  )}
                </div>)}
            </div>
            <ContributionsFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  dates: state.dates,
}))(Contributions);
