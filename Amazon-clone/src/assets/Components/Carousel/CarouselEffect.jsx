import { img } from "./Img/data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./HeroBanner.module.css";

export default function CarouseEffect() {
  return (
    <div className={styles.heroBanner}>
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
            <img src={src} alt={styles.banner} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Bottom fade */}
      <div className={styles.bannerFadeBottom}></div>
    </div>
  );
}
