import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import ContactForm from "../components/ContactForm/ContactForm";

jest.mock("axios");

describe("ContactForm component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.REACT_APP_API_ENDPOINT = "https://mock-api.test/contact";
  });

  test("renders form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test("validates required fields and shows errors", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/message is required/i)).toBeInTheDocument();
  });

  test("shows error for invalid email and phone", async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "abc" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "This is a valid message." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
    expect(await screen.findByText(/please enter a valid phone number/i)).toBeInTheDocument();
  });

  test("submits form successfully", async () => {
    axios.post.mockResolvedValueOnce({ status: 200 });

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "This is a valid message content." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("button")).toBeDisabled();

    await waitFor(() =>
      expect(
        screen.getByText(/your message has been sent successfully/i)
      ).toBeInTheDocument()
    );

    expect(axios.post).toHaveBeenCalledWith(
      process.env.REACT_APP_API_ENDPOINT,
      {
        name: "John Doe",
        email: "john@example.com",
        phone: "",
        message: "This is a valid message content.",
      },
      { headers: { "Content-Type": "application/json" } }
    );
  });

  test("shows error message on submission failure", async () => {
    axios.post.mockRejectedValueOnce(new Error("Network Error"));

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "This is a valid message content." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("button")).toBeDisabled();

    await waitFor(() =>
      expect(
        screen.getByText(/sorry, something went wrong/i)
      ).toBeInTheDocument()
    );
  });
});
