import styled from "styled-components";

export const ServicesContainer = styled.main`
  max-width: 1000px;
  margin: 2rem auto 3rem;
  padding: 0 1rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #e63946;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const ServicesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.25rem;
`;

export const ServiceCard = styled.article`
  background-color: #f1f1f1;
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  text-align: center;
  cursor: default;
  transition: transform 0.3s ease;

  &:hover,
  &:focus {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgb(0 0 0 / 0.2);
    outline: none;
  }
`;

export const ServiceIcon = styled.div`
  margin-bottom: 1rem;

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #e63946;
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #444;
`;
