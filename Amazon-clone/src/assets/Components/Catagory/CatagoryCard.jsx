import { Link } from "react-router-dom";
import Spinnner from "../../../Pages/Spinner";
import { FadeLoader } from "react-spinners";

export default function CategoryCard({ data }) {
  if (!data) {
    return  <FadeLoader />;
  }
  return (
    <section className="category-card">
      <Link to={`/products/category/${data.categoryName}`}>
        <h2>{data.title}</h2>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now</p>
      </Link>
    </section>
  );
}
