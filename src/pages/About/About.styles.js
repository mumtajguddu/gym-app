import styled from "styled-components";

export const AboutContainer = styled.main`
  max-width: 900px;
  margin: 2rem auto 3rem;
  padding: 0 1rem;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #e63946;
  margin-bottom: 1rem;
  text-align: center;
`;

export const SectionContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #222;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

export const TeamMember = styled.article`
  background-color: #f1f1f1;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  transition: transform 0.3s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgb(0 0 0 / 0.2);
  }
`;

export const MemberPhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const MemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #e63946;
`;

export const MemberRole = styled.p`
  font-weight: 600;
  color: #555;
  margin-bottom: 0.75rem;
`;

export const MemberBio = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.4;
`;
