import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://my-json-server.typicode.com/Khaneul1/hnm-react-router/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="detail-box">
      <Row className="product-row">
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col className="detailText">
          <h5>{product?.title}</h5>
          <p>{product?.price}</p>
        </Col>
        <Col>
          <button className="cartBtn">장바구니 추가 +</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
