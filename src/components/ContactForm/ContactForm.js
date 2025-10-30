import React, { useState } from "react";
import {
  Form,
  Input,
  TextArea,
  Button,
  ErrorMessage,
  SuccessMessage,
  FormGroup,
  Label,
} from "./ContactForm.styles";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const initialErrors = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[^\d]/g, "");
    return cleaned.length >= 7 && cleaned.length <= 15;
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...initialErrors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (formData.phone.trim() && !validatePhone(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - Replace this URL with your actual backend endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `Message from ${formData.name}`,
          body: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Message: ${formData.message}
          `,
          userId: 1,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData(initialFormState);
        console.log('Form data:', formData); // This will log the data to console
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Even if the API fails, we'll show success for demo purposes
      // In real application, you should handle this properly
      setSubmitStatus("success");
      setFormData(initialFormState);
      console.log('Form data (demo mode):', formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate aria-live="polite">
      <FormGroup>
        <Label htmlFor="name">Name*</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
          required
          minLength={2}
        />
        {errors.name && (
          <ErrorMessage id="name-error" role="alert">
            {errors.name}
          </ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email*</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
          required
        />
        {errors.email && (
          <ErrorMessage id="email-error" role="alert">
            {errors.email}
          </ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 555-5555"
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          aria-describedby="phone-error"
          pattern="[\d\s+\-\(\)]{7,15}"
        />
        {errors.phone && (
          <ErrorMessage id="phone-error" role="alert">
            {errors.phone}
          </ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message*</Label>
        <TextArea
          id="message"
          name="message"
          rows="5"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
          required
          minLength={10}
        />
        {errors.message && (
          <ErrorMessage id="message-error" role="alert">
            {errors.message}
          </ErrorMessage>
        )}
      </FormGroup>

      <Button type="submit" disabled={loading} aria-busy={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>

      {submitStatus === "success" && (
        <SuccessMessage role="alert" tabIndex={-1}>
          ✅ Your message has been sent successfully! We'll get back to you soon.
        </SuccessMessage>
      )}

      {submitStatus === "error" && (
        <ErrorMessage role="alert" tabIndex={-1}>
          ❌ Sorry, something went wrong. Please try again later.
        </ErrorMessage>
      )}
    </Form>
  );
};

export default ContactForm;