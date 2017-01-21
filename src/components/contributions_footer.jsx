import React from 'react';

import ContributionsLegend from './contributions_legend';
import ContributionsReset from './contributions_reset';

export default ({ onResetClick }) => (
  <div className="container-flex space-between contributions-footer">
    <ContributionsReset onResetClick={onResetClick} />
    <ContributionsLegend />
  </div>
);
