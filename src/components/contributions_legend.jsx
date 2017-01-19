import React from 'react';
import _ from 'lodash';

export default () => (
  <div className="container-flex align-center legend-block">
    Less
    <ul className="container-flex legend row-nowrap">
      <li className="rectangle" />
      {_.range(2, 5).map(index => index + 1).map(styleIndex => (
        <li key={styleIndex} className={`rectangle rectangle-${styleIndex}`} />
      ))}
    </ul>
    More
  </div>
);
