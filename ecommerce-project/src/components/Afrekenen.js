import React from 'react';
import { Link } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { getTotalPrice } from './reducer';
import './Afrekenen.css';

const Afrekenen = () => {
  const [{ winkelmandje }] = useStateValue();

  return (
    <div className="afrekenen">
      <div className="afrekenen__wrapper">

        <div className="afrekenen__info">
          <div className="afrekenen__flexRow">
            <span>Totaal artikelen</span>
            <span>
              {`(${winkelmandje.length})`}
            </span>
            <p className="afrekenen__toLeft">
              €
              { (Math.round(getTotalPrice(winkelmandje) * 100) / 100).toFixed(2)}
            </p>
          </div>
          <div className="afrekenen__flexRow">
            <p>Verzendkosten</p>
            <p className="afrekenen__toLeft">Geen</p>
          </div>
          <hr />
          <div className="afrekenen__flexRow">
            <strong>Totaal</strong>
            <p className="afrekenen__toLeft">
              €
              { (Math.round(getTotalPrice(winkelmandje) * 100) / 100).toFixed(2)}
            </p>
          </div>
          <Link to="/">
            <button
              type="button"
              className="afrekenen__btnBestellen"
            >
              {'> Verder naar bestellen'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Afrekenen;
