import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header/Header";

describe("Header component", () => {
  test("renders logo and navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Logo image
    const logo = screen.getByRole("img", { name: /gym logo/i });
    expect(logo).toBeInTheDocument();

    // Desktop nav links
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /trainers/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /membership/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /login/i })).toBeInTheDocument();
  });

  test("toggles mobile menu on hamburger click", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const hamburger = screen.getByLabelText(/toggle menu/i);
    expect(hamburger).toBeInTheDocument();

    // Initially mobile menu should not be in document
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(hamburger);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    // Mobile menu links
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();

    fireEvent.click(hamburger);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
