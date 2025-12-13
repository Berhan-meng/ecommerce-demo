import CarouseEffect from "../../assets/Components/Carousel/CarouselEffect";
import CatagoryInfo from "../../assets/Components/Catagory/CatagoryInfo";
import Product from "../../assets/Components/Product/Product";
import Layout from "../../assets/Components/Layout/Layout";

export default function Landing() {
  return (
    <Layout>
      <CarouseEffect />
      <CatagoryInfo />
      <Product />
    </Layout>
  );
}
