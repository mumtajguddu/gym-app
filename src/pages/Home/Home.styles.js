import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
`;

export const WelcomeText = styled.section`
  max-width: 800px;
  margin: 2rem auto 3rem;
  text-align: center;

  h1 {
    font-size: 2.75rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #e63946;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #222;
  }
`;

export const FeaturedServices = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ServiceCard = styled.article`
  background-color: #f1f1f1;
  border-radius: 12px;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  flex: 1 1 280px;
  max-width: 320px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgb(0 0 0 / 0.2);
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
