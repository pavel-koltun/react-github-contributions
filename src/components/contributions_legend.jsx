import React from 'react';
import _ from 'lodash';

export default () => (
  <div className="contributions-legend">
    Less
    <ul>
      {_.range(1, 6).map(styleIndex => (
        <li key={styleIndex} className={`rectangle rectangle-${styleIndex}`} />
      ))}
    </ul>
    More
  </div>
);
