import "./ProductCard.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../../Utility/action.type";
import { FadeLoader } from "react-spinners";

export default function ProductCard({ product, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, category, description } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { product },
    });
  };
  console.log(state);
  if (!product) {
    return <FadeLoader />;
  }
  return (
    <div className="productCard">
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="productCard__img" />
      </Link>

      <div className="productCard__info">
        <h3 className="productCard__title">{title}</h3>
        <Rating name="product-rating" value={rating.rate} precision={0.1} />
        <span>({rating.count})</span>
        <p className="productCard__price">${price}</p>
        {renderDesc && <p>{description}</p>}

        <p className="productCard__category">{category}</p>
        {renderAdd && (
          <button className="productCard__btn" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
