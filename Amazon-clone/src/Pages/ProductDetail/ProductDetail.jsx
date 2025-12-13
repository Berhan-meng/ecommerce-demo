import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { producturl } from "../../Api/endPoint";
import "./productDetail.css";
import Spinnner from "../Spinner";
import { FadeLoader } from "react-spinners";

export default function ProductDetail() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`${producturl}/products/${productId}`)
      .then((res) => setProductDetail(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  if (!productDetail) {
    return (
      //  <FadeLoader />
      <Spinnner />
    );
  }

  return (
    <section className="pd-container">
      {/* LEFT IMAGE SECTION */}
      <div className="pd-image-box">
        <img src={productDetail.image} alt={productDetail.title} />
      </div>

      {/* MIDDLE CONTENT */}
      <div className="pd-content">
        <h2 className="pd-title">{productDetail.title}</h2>

        <p className="pd-rating">
          ⭐ {productDetail.rating?.rate}
          <span className="pd-rating-count">
            ({productDetail.rating?.count} reviews)
          </span>
        </p>

        <h3 className="pd-price">$ {productDetail.price}</h3>

        <p className="pd-description">{productDetail.description}</p>
      </div>

      {/* RIGHT SIDE BUY BOX */}
      <div className="pd-buy-box">
        <h3 className="pd-price-large">$ {productDetail.price}</h3>

        <button className="pd-btn-add">Add to Cart</button>
        <button className="pd-btn-buy">Buy Now</button>
      </div>
    </section>
  );
}
