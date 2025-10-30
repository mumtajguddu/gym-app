import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import {
  ContactContainer,
  ContactDetails,
  DetailItem,
  DetailTitle,
  DetailContent,
} from "./Contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <ContactDetails aria-label="Contact information">
        <DetailItem>
          <DetailTitle>Address</DetailTitle>
          <DetailContent>
            1234 Fitness St., Muscle City, Fitland 56789
          </DetailContent>
        </DetailItem>
        <DetailItem>
          <DetailTitle>Phone</DetailTitle>
          <DetailContent>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </DetailContent>
        </DetailItem>
        <DetailItem>
          <DetailTitle>Email</DetailTitle>
          <DetailContent>
            <a href="mailto:info@gymwebsite.com">info@gymwebsite.com</a>
          </DetailContent>
        </DetailItem>
      </ContactDetails>

      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
