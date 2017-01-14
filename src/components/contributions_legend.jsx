import React from 'react';
import _ from 'lodash';

export default () =>
  <div className="contributions-legend">
    Less
    <ul className="legend">
      {_.range(5).map(index => index + 1).map(styleIndex => (
        <li
          key={styleIndex}
          data-style-index={styleIndex}
          className={`rectangle rectangle-${styleIndex}`}
        />
      ))}
    </ul>
    More
  </div>;
