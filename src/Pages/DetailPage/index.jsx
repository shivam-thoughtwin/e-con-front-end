import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { getProductDetail } from "../../Components/ApiCalls/apis";
// import { Container } from "react-bootstrap";
// import { ProductDetailJson } from "../../JsonData/ProductDetailJson";

const Index = () => {
  const [prodDetail, setProdDetail] = useState([]);
  const { id } = useParams();

  const getProducDetail = async () => {
    const res = await getProductDetail(id);
    setProdDetail(res?.data);
  };
  console.log("response detail setter", prodDetail);

  useEffect(() => {
    getProducDetail();
  }, []);
  return (
    <>
      <section>
        <ProductDetail product_detail={prodDetail} />
      </section>
    </>
  );
};

export default Index;
