import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Product.css'

const Product = ({ id, image, brand, name, spec, rating, ratingCount, price }) => {
  return (
    <>
      <div className="product">
        <img src={image} alt={brand}/>
        <div className="product__info">
          <p>{brand}</p>
          <p>{name}</p>
          <p>{spec}</p>
          <span>{rating}</span>
          <span>{`(${ratingCount})`}</span>
        </div>
        <div className="product__buttons">
          <h3>{price}</h3>
          <button><FavoriteBorderIcon/></button>
          <button><ShoppingCartOutlinedIcon/></button>
        </div>
      </div>
  </>
  );
};

export default Product;