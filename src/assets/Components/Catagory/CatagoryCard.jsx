import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import styles from "../Catagory/catagoryCard.module.css";

export default function CategoryCard({ data }) {
  if (!data) {
    return <FadeLoader />;
  }
  return (
    <section className={styles.category__card}>
      <Link to={`/products/category/${data.categoryName}`}>
        <h2>{data.title}</h2>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now</p>
      </Link>
    </section>
  );
}
