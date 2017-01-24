import React from 'react';

const days = [
  { index: 0, name: '' },
  { index: 1, name: 'Mon' },
  { index: 2, name: '' },
  { index: 3, name: 'Wed' },
  { index: 4, name: '' },
  { index: 5, name: 'Fri' },
  { index: 6, name: '' },
];

export default () =>
  <div className="contributions-days">
    <div className="contributions-header" />
    <ul>
      {days.map(day => <li className="day" key={day.index}>{day.name}</li>)}
    </ul>
  </div>;
