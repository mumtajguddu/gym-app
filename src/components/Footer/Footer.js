import React from "react";
import {
  FooterContainer,
  FooterContent,
  ContactInfo,
  SocialLinks,
  SocialLink,
  Copyright,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ContactInfo>
          <h3>Gym Address</h3>
          <address>
            1234 Fitness St.<br />
            Muscle City, Fitland 56789<br />
            Phone: <a href="tel:+1234567890">+1 (234) 567-890</a><br />
            Email: <a href="mailto:info@gymwebsite.com">info@gymwebsite.com</a>
          </address>
        </ContactInfo>

        <SocialLinks aria-label="Social media links">
          <SocialLink
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.675 0h-21.35C.601 0 0 .6 0 1.34v21.317c0 .74.601 1.343 1.325 1.343h11.5v-9.284H9.692v-3.622h3.133V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.1 2.794.144v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.723 0 1.324-.602 1.324-1.343V1.34c0-.74-.601-1.34-1.324-1.34z" />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.164-2.724c-.951.562-2.005.97-3.127 1.191a4.916 4.916 0 00-8.373 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616c-.054 2.385 1.67 4.608 4.15 5.096a4.935 4.935 0 01-2.224.084c.626 1.956 2.444 3.377 4.6 3.42a9.867 9.867 0 01-6.1 2.103c-.395 0-.787-.023-1.17-.067a13.945 13.945 0 007.557 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.21-.005-.423-.014-.633A10.012 10.012 0 0024 4.557z" />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.5 2A5.5 5.5 0 002 7.5v9A5.5 5.5 0 007.5 22h9a5.5 5.5 0 005.5-5.5v-9A5.5 5.5 0 0016.5 2h-9zm7.25 3.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.047c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.07 2.07 0 01-2.067-2.067 2.07 2.07 0 112.067 2.067zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.541C0 23.22.792 24 1.771 24h20.451C23.2 24 24 23.22 24 22.271V1.73C24 .774 23.2 0 22.225 0z" />
            </svg>
          </SocialLink>
        </SocialLinks>
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()} Gym Website. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
