import CategoryList from "./CatagoryList.js";
import CatagoryCard from "./CatagoryCard.jsx";
import "./catagoryInfo.css";
import Spinnner from "../../../Pages/Spinner.jsx";
import { FadeLoader } from "react-spinners";

export default function CatagoryInfo() {
  if (!CategoryList) {
    return <FadeLoader />;
  }
  return (
    <section className="category-container">
      {CategoryList.map((info, index) => (
        <CatagoryCard key={index} data={info} />
      ))}
    </section>
  );
}
