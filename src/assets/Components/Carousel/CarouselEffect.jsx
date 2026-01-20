import { img } from "./Img/data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./HeroBanner.module.css";

export default function CarouseEffect() {
  return (
    <div className={styles.heroBanner}>
      {/* Educational Disclaimer Banner */}
      <div
        style={{
          backgroundColor: "#ffcc00",
          color: "#000",
          textAlign: "center",
          padding: "10px",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        DISCLAIMER: This is an E-Commerce Demo Project created for educational
        and portfolio purposes only. No real products or commercial transactions
        are available on this website.
      </div>

      <Swiper
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        navigation={true}
      >
        {img.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt="E-commerce demo banner" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom fade */}
      <div className={styles.bannerFadeBottom}></div>
    </div>
  );
}
