import React from 'react';
import './WinkelwagentjeProduct.css';
import { useStateValue } from './StateProvider';

const WinkelwagentjeProduct = ({ id, image, name, brand, rating, ratingCount, price }) => {
  const [{winkelmandje}, dispatch] = useStateValue();

  const verwijderUitMandje = () => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    })
  }

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
        <div className="winkelwagentjeProduct__priceAndBtn">
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