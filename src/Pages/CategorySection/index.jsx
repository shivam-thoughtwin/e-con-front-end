import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategorySection from "./CategorySection";
import { getProductByCategory } from "../../Components/ApiCalls/apis";
// import { Container, Row, Col } from "react-bootstrap";
// import { CategoryJson } from "../../JsonData/CategoryJson";

const Index = () => {
  const { categoryName } = useParams();
  const [productByCate, setProductByCate] = useState([]);
  
  const getProductByCat = async () => {
    const res = await getProductByCategory(categoryName);
    setProductByCate(res?.data);
  };
  console.log("product by category: ", productByCate);
  useEffect(() => {
    getProductByCat();
  }, []);
  return (
    <>
      <section>
        <CategorySection category_data={productByCate} />
      </section>
    </>
  );
};

export default Index;
