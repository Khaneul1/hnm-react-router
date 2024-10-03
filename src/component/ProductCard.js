import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} />
      <div className="product-text">
        <div>{item?.choice === true ? 'Concious choice' : ''}</div>
        <h5>{item?.title}</h5>
        <p>${item?.price}</p>
        <div>{item?.new === true ? '신제품' : ''}</div>
      </div>
    </div>
  );
};

export default ProductCard;
