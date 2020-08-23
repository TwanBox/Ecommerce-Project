import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Product.css'
import { useStateValue } from './StateProvider';

const Product = ({ id, image, brand, name, spec, rating, ratingCount, price }) => {
  const [{ winkelmandje }, dispatch] = useStateValue();

  const addItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      item: {
        id,
        image,
        brand,
        name,
        rating,
        ratingCount,
        price,
      }
    })
  }

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
          <h3 className="product_price">{price}</h3>
          <button onClick={addItem} className="product__cartButton"><ShoppingCartOutlinedIcon/></button>
          <button className="product__heartButton"><FavoriteBorderIcon/></button>
        </div>
      </div>
  </>
  );
};

export default Product;