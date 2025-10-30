import React from "react";
import {
  ServicesContainer,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
} from "./Services.styles";

const services = [
  {
    title: "Personal Training",
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
    description:
      "One-on-one training sessions with certified trainers tailored to your goals.",
  },
  {
    title: "Group Classes",
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
    description:
      "Participate in a wide range of classes including yoga, HIIT, and spinning.",
  },
  {
    title: "Nutrition Counseling",
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
    description:
      "Professional advice to design a nutrition plan that fits your lifestyle.",
  },
  {
    title: "Massage Therapy",
    icon: (
      <svg
        width="48"
        height="48"
        fill="#e63946"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.5 9h-17a.5.5 0 000 1h17a.5.5 0 000-1zM6 12.5a.5.5 0 00-.5.5v3a2.5 2.5 0 005 0v-3a.5.5 0 00-.5-.5H6zM7.5 15v1a1 1 0 102 0v-1h-2z" />
      </svg>
    ),
    description:
      "Relax and recover with our professional massage therapy services.",
  },
  {
    title: "Sauna & Spa",
    icon: (
      <svg
        width="48"
        height="48"
        fill="#e63946"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17 10h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4 0H7v2h2v-2zm10-4h-2v2h2V6zm-4 0h-2v2h2V6zm-4 0H7v2h2V6zM4 18v-2H2v2a2 2 0 002 2h16a2 2 0 002-2v-2h-2v2H4z" />
      </svg>
    ),
    description:
      "Enjoy our relaxing sauna and spa facilities to rejuvenate your body.",
  },
];

const Services = () => {
  return (
    <ServicesContainer>
      <h1>Our Services</h1>
      <ServicesGrid aria-label="List of gym services">
        {services.map(({ title, icon, description }) => (
          <ServiceCard key={title} tabIndex={0}>
            <ServiceIcon aria-hidden="true">{icon}</ServiceIcon>
            <ServiceTitle>{title}</ServiceTitle>
            <ServiceDescription>{description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;
