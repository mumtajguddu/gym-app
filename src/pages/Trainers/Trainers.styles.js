import styled from "styled-components";

export const TrainersContainer = styled.main`
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

export const TrainersGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.25rem;
`;

export const TrainerCard = styled.article`
  background-color: #f1f1f1;
  border-radius: 14px;
  padding: 1.5rem;
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

export const TrainerPhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const TrainerName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #e63946;
`;

export const TrainerSpecialty = styled.p`
  font-weight: 600;
  color: #555;
  margin-bottom: 0.75rem;
`;

export const TrainerBio = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.4;
`;
