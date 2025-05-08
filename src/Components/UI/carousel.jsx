import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { CardV2 } from "./Card";

export default function Carousel({ slides, gap = 10 }) {
  return (
    <div className="w-full px-4 h-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={gap}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 8.5,
          },
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center w-fit">
            <CardV2
              title={slide.title}
              image={slide.image}
              description={slide.description}
              link={slide.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
