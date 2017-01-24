import React from 'react';
import _ from 'lodash';

export default () => (
  <div className="contributions-legend">
    Less
    <ul>
      <li className="rectangle" />
      {_.range(2, 6).map(styleIndex => (
        <li key={styleIndex} className={`rectangle rectangle-${styleIndex}`} />
      ))}
    </ul>
    More
  </div>
);
