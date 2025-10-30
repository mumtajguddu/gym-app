import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App routing", () => {
  test("renders Home page on default route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /welcome to our gym/i })).toBeInTheDocument();
  });

  test("renders About page on /about route", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /our history/i })).toBeInTheDocument();
  });

  test("renders Services page on /services route", () => {
    render(
      <MemoryRouter initialEntries={["/services"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /our services/i })).toBeInTheDocument();
  });

  test("renders Trainers page on /trainers route", () => {
    render(
      <MemoryRouter initialEntries={["/trainers"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /meet our trainers/i })).toBeInTheDocument();
  });

  test("renders Membership page on /membership route", () => {
    render(
      <MemoryRouter initialEntries={["/membership"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /membership plans/i })).toBeInTheDocument();
  });

  test("renders Contact page on /contact route", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /contact us/i })).toBeInTheDocument();
  });

  test("renders Login page on /login route", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
  });
});
