import React from 'react';
import ReactTooltip from 'react-tooltip';

import Contributions from './contributions';
import Header from './header';
import Script from './script';

export default () =>
  <div className="container container-flex column-nowrap align-center">
    <Header />
    <ReactTooltip place="top" type="dark" effect="solid" />
    <Contributions />
    <Script />
  </div>;
