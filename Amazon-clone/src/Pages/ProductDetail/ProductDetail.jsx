import axios from "axios";
import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { producturl } from "../../Api/endPoint";
import styles from "./productDetail.module.css";
import Spinnner from "../Spinner";
import { AddToCart } from "../../Utility/addToCart";
// import { FadeLoader } from "react-spinners";
import Layout from "../../assets/Components/Layout/Layout";
import ProductCard from "../../assets/Components/Product/ProductCard";
export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${producturl}/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  if (!product) {
    return (
      // <FadeLoader />
      <Spinnner />
    );
  }

  return (
    <Layout>
      <section className={styles.pd__container}>
        <ProductCard
          product={product}
          key={product.id}
          renderDesc={true}
          renderAdd={true}
          flex={true}
          enableHover={true}
        />
      </section>
    </Layout>
  );
}
