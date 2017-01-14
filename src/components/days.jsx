import React from 'react';

const days = [
  { index: 1, name: '' },
  { index: 2, name: 'Mon' },
  { index: 3, name: '' },
  { index: 4, name: 'Wed' },
  { index: 5, name: '' },
  { index: 6, name: 'Fri' },
  { index: 7, name: '' },
];

export default () =>
  <ul className="days">
    {days.map(day => <li className="day" key={day.index}>{day.name}</li>)}
  </ul>;
