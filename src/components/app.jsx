import React from 'react';

import Contributions from './contributions';
import Days from './days';
import Header from './header';

export default () =>
  <div className="container-flex column-nowrap align-center">
    <Header />
    <div className="container-flex row-nowrap justify-center contributions-panel">
      <Days />
      <Contributions rows={7} columns={50} />
    </div>
  </div>;
