import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./style.scss";

const CategorySection = ({ category_data }) => {
  
  return (
    <>
      <Container className="category_section">
        <Row>
          {category_data.map((item) => (
            <Col lg={3}>
              {/* <Link to={`/${item.productType}/${item.id}`}> */}
              <Link to={`/productDetail/${item.id}`}>
                <Card className="mb-3">
                  <Card.Body className="image_Box">
                    <Card.Img src={item.image} />
                    <Card.Title className="mt-2">{item.title}</Card.Title>
                    <Card.Text>₹{item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CategorySection;
