import React from 'react';

import ContributionsLegend from './contributions_legend';
import ContributionsActions from './contributions_actions';

export default () => (
  <div className="contributions-footer">
    <ContributionsActions />
    <ContributionsLegend />
  </div>
);
