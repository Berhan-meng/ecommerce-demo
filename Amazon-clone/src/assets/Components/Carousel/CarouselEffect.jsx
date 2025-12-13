// import React from "react";
// import { Carousel } from "react-responsive-carousel";
import { img } from "./Img/data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./HeroBanner.module.css";

export default function CarouseEffect() {
  return (
    // <div>
    //   <Carousel
    //     autoPlay
    //     infiniteLoop
    //     showIndicators={true}
    //     showThumbs={true}
    //     showStatus={false}
    //   >
    //     {img.map((imglink, index) => (
    //       <img key={index} src={imglink} alt={`slide-${index}`} />
    //     ))}
    //   </Carousel>
    // </div>

    <div className={styles.heroBanner}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={1}
      >
        {img.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={styles.banner} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Bottom fade */}
      <div className={styles.bannerFadeBottom}></div>
    </div>
  );
}
