import React from 'react';

import Contributions from './contributions';
import Days from './days';

export default () =>
  <div>
    <div className="title">
      <h1>GitHub contributions</h1>
    </div>
    <div className="content">
      <Days />
      <Contributions rows={7} columns={50} />
    </div>
  </div>;
