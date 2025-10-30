import styled from "styled-components";

export const SliderContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto 3rem;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.3);

  .swiper-pagination-bullet {
    background-color: #e63946;
    opacity: 0.8;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

export const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.75) 75%,
    rgba(0, 0, 0, 0.9) 100%
  );
  padding: 1.5rem 2rem;
  color: #fff;
`;

export const SlideText = styled.div`
  max-width: 600px;

  h2 {
    margin: 0 0 0.5rem;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
