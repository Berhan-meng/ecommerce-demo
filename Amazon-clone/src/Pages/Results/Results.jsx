import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/endPoint";
import { useEffect, useState } from "react";
import ProductCard from "../../assets/Components/Product/ProductCard";
import Layout from "../../assets/Components/Layout/Layout";
import Spinnner from "../Spinner";
// import { fabClasses } from "@mui/material/Fab";
import styles from "./results.module.css";

export default function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${producturl}/products/category/${categoryName}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, [categoryName]);
  if (results.length === 0) {
    return <Spinnner />;
  }

  return (
    <Layout>
      <h2>Results for: {categoryName}</h2>
      <div className={styles.category__page}>
        {results.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            renderDesc={false}
            renderAdd={true}
          />
        ))}
      </div>
    </Layout>
  );
}
