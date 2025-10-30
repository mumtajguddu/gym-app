import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  z-index: 1000;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.5);
`;

export const Logo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
`;

// Desktop nav links
export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;

  &.active {
    background-color: #e63946;
    color: #fff;
  }

  &:hover,
  &:focus-visible {
    background-color: #e63946;
    color: #fff;
    outline: none;
  }
`;

// Hamburger for mobile
export const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
  z-index: 1100;

  span {
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s linear;
  }

  &:focus-visible {
    outline: 2px solid #e63946;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Mobile menu
export const MobileMenu = styled.div`
  position: absolute;
  top: 64px;
  right: 0;
  background-color: #222;
  width: 200px;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 0.7);
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  z-index: 1050;
`;

export const MobileNavLink = styled(NavLink)`
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &.active {
    background-color: #e63946;
    color: #fff;
  }

  &:hover,
  &:focus-visible {
    background-color: #e63946;
    color: #fff;
    outline: none;
  }
`;
