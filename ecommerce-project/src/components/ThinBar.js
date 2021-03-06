import React from 'react';
import './ThinBar.css';

const ThinBar = () => {
  return (
    <div>
      <nav className="thinbar">
        <ul>
          <li className="thinbar__text">
            <span>
              <strong>Gratis </strong>
              verzending vanaf 20,-
            </span>
          </li>
          <li className="thinbar__text">
            <span>Bezorging dezelfde dag, &apos;s avonds of in het weekend*</span>
          </li>
          <li className="thinbar__text">
            <span>
              <strong>Gratis </strong>
              retourneren
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ThinBar;
