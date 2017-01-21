import React from 'react';

import _ from 'lodash';

const months = [
  { index: 0, name: 'Jan' },
  { index: 1, name: 'Feb' },
  { index: 2, name: 'Mar' },
  { index: 3, name: 'Apr' },
  { index: 4, name: 'May' },
  { index: 5, name: 'Jun' },
  { index: 6, name: 'Jul' },
  { index: 7, name: 'Aug' },
  { index: 8, name: 'Sep' },
  { index: 9, name: 'Oct' },
  { index: 10, name: 'Nov' },
  { index: 11, name: 'Dec' },
];

export default props => {

  const { dates, daysInColumn } = props;

  const monthOnWeeks = _.chunk(dates, daysInColumn).reduce((state, current, index) => {
    const monthsAtWeek = current.reduce(
      (weekState, day) => {
        const year = day.format('YYYY');
        const month = day.format('MMM');

        const newWeekState = { ...weekState };

        if (!newWeekState[year]) {
          newWeekState[year] = [];
        }

        if (newWeekState[year].indexOf(month) === -1) {
          newWeekState[year].push(month);
        }

        return newWeekState;
      }, {});

    const newState = { ...state };

    _.each(monthsAtWeek, (monthsOnWeek, year) => {
      if (!newState[year]) {
        newState[year] = {};
      }

      const monthsOnWeekSpliced = monthsOnWeek.length > 1 ? monthsOnWeek.splice(1) : monthsOnWeek;

      _.each(monthsOnWeekSpliced, (month) => {
        if (newState[year][month]) {
          newState[year][month] += 1;
          return;
        }
        newState[year][month] = 1;
      });
    });


    return newState;
  }, {});

  const weekCountPerYear = _.pickBy(monthOnWeeks, value => _.keys(value).length > 1);

  return (
    <div className="container-flex row-nowrap contributions-header month">
      {_.keys(weekCountPerYear).map(year => months.map((month) => {
        const weekCount = weekCountPerYear[year][month.name];

        const emptyColumns = weekCount > 2 ? _.range(weekCount - 1)
          .map(() => <div className="column" />) : null;

        return (
          <div className="container-flex">
            <div key={month.index} className="column">{month.name}</div>
            {emptyColumns}
          </div>
        );
      }))}
    </div>
  );
};
