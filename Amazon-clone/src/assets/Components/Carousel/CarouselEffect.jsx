import { img } from "./Img/data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./HeroBanner.module.css";

export default function CarouseEffect() {
  return (
    <div className={styles.heroBanner}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {img.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={styles.banner} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Bottom fade */}
      <div className={styles.bannerFadeBottom}></div>
    </div>
  );
}
