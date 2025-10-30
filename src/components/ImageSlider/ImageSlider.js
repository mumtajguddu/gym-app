import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import {
  SliderContainer,
  SlideImage,
  SlideOverlay,
  SlideText,
} from "./ImageSlider.styles";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/a11y";

const slides = [
  {
    imgSrc:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
    title: "State-of-the-art Equipment",
    description:
      "Experience the best workouts with our modern gym machines and free weights.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    title: "Certified Personal Trainers",
    description:
      "Our expert trainers are here to guide you through every step of your fitness journey.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Group Classes & Community",
    description:
      "Join exciting group classes and become part of our supportive fitness community.",
  },
];

const ImageSlider = () => {
  return (
    <SliderContainer aria-label="Gym highlights image slider">
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        autoplay={{ 
          delay: 4000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        loop={true}
        slidesPerView={1}
        speed={800}
        a11y={{ 
          enabled: true,
          prevSlideMessage: "Previous slide", 
          nextSlideMessage: "Next slide" 
        }}
        keyboard={{
          enabled: true,
        }}
      >
        {slides.map(({ imgSrc, title, description }, index) => (
          <SwiperSlide key={index}>
            <SlideImage
              src={imgSrc}
              alt={title}
              loading="lazy"
              decoding="async"
              width="1200"
              height="600"
            />
            <SlideOverlay>
              <SlideText>
                <h2>{title}</h2>
                <p>{description}</p>
              </SlideText>
            </SlideOverlay>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default ImageSlider;