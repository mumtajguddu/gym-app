import styled from "styled-components";

export const MembershipContainer = styled.main`
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

export const PlansGrid = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PlanCard = styled.article`
  background-color: #f1f1f1;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  flex: 1 1 280px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  transition: transform 0.3s ease;

  &:hover,
  &:focus {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgb(0 0 0 / 0.2);
    outline: none;
  }
`;

export const PlanName = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #e63946;
`;

export const PlanPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #222;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  width: 100%;
`;

export const FeatureItem = styled.li`
  font-size: 1rem;
  line-height: 1.4;
  color: #444;
  padding-left: 1.25rem;
  position: relative;
  margin-bottom: 0.75rem;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #e63946;
    font-weight: 700;
  }
`;

export const SignupButton = styled.button`
  background-color: #e63946;
  color: #fff;
  font-weight: 700;
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus-visible {
    background-color: #d62828;
    outline: none;
  }
`;
