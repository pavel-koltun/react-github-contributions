import React from 'react';
import _ from 'lodash';

import Rectangle from '../containers/rectangle';
import Actions from './actions';
import ContributionsLegend from './contributions_legend';

export default ({ rows, columns }) =>
  <div className="contributions">
    {_.range(rows).map(rowIndex => (
      <div key={rowIndex} className="row">
        {_.range(columns).map(columnIndex => (
          <Rectangle key={columnIndex} cellId={`${rowIndex}#${columnIndex}`} />
      ))}
      </div>))}
    <div className="contributions-footer">
      <Actions />
      <ContributionsLegend />
    </div>
  </div>;
