import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getProductByCategory } from "../../Components/ApiCalls/apis";
import "./style.scss";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    getProductCategory();
  }, []);
  const getProductCategory = async () => {
    const res = await getProductByCategory(categoryName);
    setProductsData(res?.data?.product);
  };

  return (
    <section className="mt-5">
      <Container className="prod_container">
        {productsData.map((item) => (
          <Link to={`/productDetail`}>
            <Row>
              <Col lg={3}>
                <Card className="mb-3">
                  <Card.Body className="cardimg">
                    <Card.Img src={item.productImageUrl} />
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <p>{item.productName}</p>
                <p>{item.description}</p>
              </Col>
              <Col lg={3}>
                <p style={{ textAlign: "center" }}>₹{item.price}</p>
              </Col>
              <hr />
            </Row>
          </Link>
        ))}
      </Container>
    </section>
  );
};

export default Products;
