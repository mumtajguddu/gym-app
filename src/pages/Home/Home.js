import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import About from "../About/About";
import Trainers from  "../Trainers/Trainers";
import {
  HomeContainer,
  WelcomeText,
  FeaturedServices,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
} from "./Home.styles";

const services = [
  {
    icon: (
      <svg
        width="48"
        height="48"
        fill="#e63946"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20 6h-3V4a3 3 0 00-6 0v2H8a2 2 0 00-2 2v8a3 3 0 006 0v-3h4v3a3 3 0 006 0V8a2 2 0 00-2-2zm-7-2a1 1 0 012 0v2h-2V4zm7 10a1 1 0 01-2 0v-3h2v3zm-6-1h-4v-6h4v6z" />
      </svg>
    ),
    title: "Personal Training",
    description:
      "Work one-on-one with certified trainers to reach your fitness goals faster.",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        fill="#e63946"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17 3v2H7V3H5v2h-.5A1.5 1.5 0 003 6.5v12A1.5 1.5 0 004.5 20h15a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0019.5 5H19V3h-2zm-8 9h6v2H9v-2zm8-6v2H7V6h10z" />
      </svg>
    ),
    title: "Group Classes",
    description:
      "Join a variety of group classes including yoga, HIIT, spinning, and more.",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        fill="#e63946"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 7a5 5 0 00-5 5 5 5 0 0010 0 5 5 0 00-5-5zm0 8a3 3 0 01-3-3 3 3 0 016 0 3 3 0 01-3 3zm6-8v1h2V7h-2zm-1.5 5.5l1.42 1.42 1.42-1.42-1.42-1.42-1.42 1.42zM6 7v1h2V7H6zm-.5 5.5L7 13.92l1.5-1.42-1.5-1.42-1.5 1.42zM20 17h-2v-2h2v2z" />
      </svg>
    ),
    title: "Nutrition Counseling",
    description:
      "Get personalized nutrition plans to complement your workout routine.",
  },
];

const Home = () => {
  return (
    <HomeContainer>
      <ImageSlider />

      <WelcomeText>
        <h1>Welcome to Our Gym</h1>
        <p>
          Your fitness journey starts here. We provide top-notch facilities,
          expert trainers, and a supportive community to help you achieve your
          goals.
        </p>
      </WelcomeText>
     <About/>
<Trainers/>
      <FeaturedServices aria-label="Featured gym services">
        {services.map(({ icon, title, description }) => (
          <ServiceCard key={title}>
            <ServiceIcon>{icon}</ServiceIcon>
            <ServiceTitle>{title}</ServiceTitle>
            <ServiceDescription>{description}</ServiceDescription>
          </ServiceCard>
        ))}
      </FeaturedServices>
    </HomeContainer>
  );
};

export default Home;
