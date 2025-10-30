import styled from "styled-components";

export const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background-color: #222;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.7);
`;

export const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.375rem;
  font-weight: 600;
  color: #f1f1f1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 2px solid transparent;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #333;
  color: #eee;
  transition: border-color 0.3s ease;

  &:focus-visible {
    outline: none;
    border-color: #e63946;
    background-color: #2b2b2b;
  }

  &[aria-invalid="true"] {
    border-color: #e63946;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 2px solid transparent;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #333;
  color: #eee;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus-visible {
    outline: none;
    border-color: #e63946;
    background-color: #2b2b2b;
  }

  &[aria-invalid="true"] {
    border-color: #e63946;
  }
`;

export const Button = styled.button`
  background-color: #e63946;
  color: #fff;
  font-weight: 700;
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    background-color: #d62828;
    outline: none;
  }

  &:disabled {
    background-color: #a33a3a;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 0.25rem;
  color: #e63946;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const SuccessMessage = styled.div`
  margin-top: 1rem;
  color: #06d6a0;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;
