import styled from "styled-components";

export const ContactContainer = styled.main`
  max-width: 800px;
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

export const ContactDetails = styled.section`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const DetailItem = styled.div`
  flex: 1 1 220px;
  text-align: center;

  a {
    color: #222;
    text-decoration: underline;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover,
    &:focus-visible {
      color: #e63946;
      outline: none;
    }
  }
`;

export const DetailTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #e63946;
`;

export const DetailContent = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.4;
`;
