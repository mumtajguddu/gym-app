import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #111;
  color: #eee;
  padding: 2rem 2rem 1rem;
  font-size: 0.9rem;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ContactInfo = styled.address`
  font-style: normal;
  line-height: 1.5;
  max-width: 320px;

  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    color: #e63946;
  }

  a {
    color: #f1f1f1;
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover,
    &:focus-visible {
      color: #e63946;
      outline: none;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  font-size: 1.5rem;
`;

export const SocialLink = styled.a`
  color: #eee;
  display: inline-flex;
  transition: color 0.3s ease;

  &:hover,
  &:focus-visible {
    color: #e63946;
    outline: none;
  }

  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const Copyright = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  color: #777;
  font-size: 0.85rem;
`;
