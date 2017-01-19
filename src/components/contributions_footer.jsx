import React from 'react';

import ContributionsLegend from './contributions_legend';

export default ({ onResetClick }) => (
  <div className="container-flex space-between contributions-footer">
    <button onClick={onResetClick} className="button reset">Reset</button>
    <ContributionsLegend />
  </div>
);
