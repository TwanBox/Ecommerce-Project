import React from 'react';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import WinkelwagentjeProduct from './WinkelwagentjeProduct';
import Checkbox from '@material-ui/core/Checkbox';
import Afrekenen from './Afrekenen';
import './winkelwagentje.css'

const Winkelwagentje = () => {
  const [{ winkelmandje }] = useStateValue();

  return (
    <div className="winkelwagentje">
      {winkelmandje?.length === 0 ? (
        <div className="winkelwagentje__empty">
          <h1>Winkelwagentje</h1>
          <p>Er staan geen artikelen in het Winkelwagentje</p>
          <Link to="/">
            <button 
              type="button" 
              className="winkelwagentje__btn"
            >
              {'< Verder winkelen'}
            </button>
          </Link>
        </div>
      ) : (
        <div className="winkelwagentje__empty">
          <div className="winkelwagentje__flexRow">
            <h1>Winkelwagentje</h1>
            <h5 className="winkelwagentje__select">Bestel nu en je bestelling wordt gratis verzonden!</h5>
          </div>
          <div className="winkelwagentje__flexRow">
            <Link to="/">
              <button 
                type="button" 
                className="winkelwagentje__btn"
              >
                {'< Verder Winkelen'}
              </button>
            </Link>
            <Link to="/">
              <button 
                type="button" 
                className="winkelwagentje__btnBestellen"
              >
                {'> Verder naar bestellen'}
              </button>
            </Link>
          </div>
          <hr className="winkelwagentje__hr"></hr>
          {winkelmandje.map(({ id, image, name, brand, price, rating, ratingCount }) => (
            <WinkelwagentjeProduct 
              key={id}
              id={id}
              image={image}
              name={name}
              brand={brand}
              rating={rating}
              ratingCount={ratingCount}
              price={price}
            />
          ))}
          <div className="winkelwagentje__selectWrapper">
            <h2 className="winkelwagentje__selectBottom">Select</h2>
            <div>
              <p className="winkelwagentje__selectGreen">Neem <strong>Select</strong> erbij voor € 9,99 p.j.</p>
              <p>en krijg meer gemak en voordeel</p>
              <Link>
                <p className="winkelwagentje__selectBlue">{'> Wat is select?'}</p>
              </Link>
            </div>
          </div>
          <hr></hr>
          <Afrekenen />
        </div>
      )}
    </div>
  );
};

// winkelmandje === State - winkelwagentje === Component
export default Winkelwagentje;
