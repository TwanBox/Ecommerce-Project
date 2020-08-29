import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import './WinkelwagentjeProduct.css';
import { useStateValue } from './StateProvider';

const WinkelwagentjeProduct = ({ key, image, name, brand, rating, ratingCount, price }) => {
  const [{mandje}, dispatch] = useStateValue();

  return (
    <>
      <div className="winkelwagentjeProduct">
        <img src={image} className="winkelwagentjeProduct__image" alt={`productImage for: ${name}`} />
        <div className="winkelwagentjeProduct__info">
          <h5>{name}</h5>
          <p>{brand}</p>
          <span>{rating}</span>
          <span>{`(${ratingCount})`}</span>
        </div>
        <p className="winkelwagentjeProduct__opVoorraad">Op voorraad. Voor 23:59 uur besteld,<br></br> maandag in huis</p>
        <div>
          <h3 className="winkelwagentjeProduct__price">{`€${price}`}</h3>
          <button 
            className="winkelwagentjeProduct__verwijderLink" 
            onClick={verwijderUitMandje} >
            Verwijder
          </button>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default WinkelwagentjeProduct;