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
  <div className="container-flex column-nowrap">
    <div className="contributions-header" />
    <ul className="container-flex column-nowrap day" style={{ marginTop: '0' }}>
      {days.map(day => <li className="row" key={day.index}>{day.name}</li>)}
    </ul>
  </div>;
