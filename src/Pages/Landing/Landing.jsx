import CarouseEffect from "../../assets/Components/Carousel/CarouselEffect";
import CatagoryInfo from "../../assets/Components/Catagory/CatagoryInfo";
import Product from "../../assets/Components/Product/Product";
import Layout from "../../assets/Components/Layout/Layout";
import styles from "./landing.module.css"

export default function Landing() {
  return (
    <Layout>
      <section className={styles.heroWrapper}>
        <CarouseEffect />
        <CatagoryInfo />
      </section>
      <Product />
    </Layout>
  );
}
