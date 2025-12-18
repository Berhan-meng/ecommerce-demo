import CategoryList from "./CatagoryList.js";
import CatagoryCard from "./CatagoryCard.jsx";
import styles from "./catagoryInfo.module.css";
import { FadeLoader } from "react-spinners";

export default function CatagoryInfo() {
  if (!CategoryList) {
    return <FadeLoader />;
  }
  return (
    <section className={styles.category__container}>
      {CategoryList?.map((info, i) => (
        <CatagoryCard key={i} data={info} />
      ))}
    </section>
  );
}
