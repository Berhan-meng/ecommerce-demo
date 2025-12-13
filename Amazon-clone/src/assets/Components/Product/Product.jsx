import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./Product.css";
import Spinnner from "../../../Pages/Spinner";
import { FadeLoader } from "react-spinners";

export default function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!product) {
    return <FadeLoader />;
  }

  return (
    <section className="productContainer">
      {product.map((singleItem) => (
        <ProductCard
          key={singleItem.id}
          product={singleItem}
          renderDesc={false}
          renderAdd={true}
        />
      ))}
    </section>
  );
}
