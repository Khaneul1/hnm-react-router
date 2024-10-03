import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = ({ authenticate }) => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || ''; //q의 아이템 가져와서 searchQuery에 넣기
    console.log('쿼리 값은?', searchQuery);
    let url = `http://my-json-server.typicode.com/Khaneul1/hnm-react-router/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row className="product-row">
          {productList.map((menu) => (
            <Col lg={4} className="Product">
              <ProductCard item={menu} authenticate={authenticate} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
