import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLinks,
  StyledLink,
  Hamburger,
  MobileMenu,
  MobileNavLink,
} from "./Header.styles";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/trainers", label: "Trainers" },
  { path: "/membership", label: "Membership" },
  { path: "/contact", label: "Contact" },
  { path: "/login", label: "Login" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <HeaderContainer>
      <Link to="/" aria-label="Gym Logo">
        <Logo
          src="https://w7.pngwing.com/pngs/240/627/png-transparent-gym-logo-mark-gym-fitness-thumbnail.png"
          alt="Gym Logo"
        />
      </Link>

      <Nav>
        <NavLinks>
          {navItems.map(({ path, label }) => (
            <StyledLink
              key={label}
              to={path}
              onClick={closeMobileMenu}
              end={path === "/"}
            >
              {label}
            </StyledLink>
          ))}
        </NavLinks>

        <Hamburger
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </Hamburger>

        {mobileMenuOpen && (
          <MobileMenu role="dialog" aria-modal="true" aria-label="Mobile menu">
            {navItems.map(({ path, label }) => (
              <MobileNavLink
                key={label}
                to={path}
                onClick={closeMobileMenu}
                end={path === "/"}
              >
                {label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
