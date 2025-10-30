import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

export const LoginForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 14px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &[aria-invalid="true"] {
    border-color: #dc3545;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover:not(:disabled) {
    background: #0056b3;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #dc3545;
  border-radius: 5px;
  background: #f8d7da;
`;

export const LinkText = styled.span`
  color: #007bff;
  text-align: center;
  display: block;
  margin: 15px 0;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #666;
  font-size: 14px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #ddd;
  }

  &:after {
    content: '${props => props.children}';
    background: white;
    padding: 0 10px;
    position: relative;
  }
`;