import React, { useState } from "react";
import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
  FormGroup,
  Label,
  Title,
  Subtitle,
  LinkText,
  Divider
} from "./Login.styles";

const initialFormState = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
};

// Demo user credentials (remove in production)
const demoUsers = {
  "user@example.com": "password123",
  "admin@gym.com": "admin123",
  "test@test.com": "test123"
};

const Login = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...initialErrors };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (!validatePassword(formData.password.trim())) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setLoginStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setLoginStatus(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Demo authentication (replace with real API call)
      if (demoUsers[formData.email] && demoUsers[formData.email] === formData.password) {
        setLoginStatus("success");
        
        // Store login state (in real app, use context/Redux/localStorage)
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", formData.email);
        
        // Redirect after successful login
        setTimeout(() => {
          window.location.href = "/dashboard"; // Change to your dashboard route
        }, 1000);
        
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    alert("Password reset feature would be implemented here");
  };

  const handleSignUp = () => {
    window.location.href = "/signup"; // Change to your signup route
  };

  // Demo credentials for testing
  const fillDemoCredentials = (email, password) => {
    setFormData({ email, password });
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit} noValidate aria-live="polite">
        <Title>Welcome Back</Title>
        <Subtitle>Sign in to your account</Subtitle>

        <FormGroup>
          <Label htmlFor="email">Email Address*</Label>
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
          <Label htmlFor="password">Password*</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
            required
            minLength={6}
          />
          {errors.password && (
            <ErrorMessage id="password-error" role="alert">
              {errors.password}
            </ErrorMessage>
          )}
        </FormGroup>

        <Button type="submit" disabled={loading} aria-busy={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        {loginStatus === "success" && (
          <ErrorMessage role="alert" tabIndex={-1} style={{color: 'green', borderColor: 'green', background: '#d4edda'}}>
            ✅ Login successful! Redirecting...
          </ErrorMessage>
        )}

        {loginStatus === "error" && (
          <ErrorMessage role="alert" tabIndex={-1}>
            ❌ Invalid email or password. Please try again.
          </ErrorMessage>
        )}

        <LinkText onClick={handleForgotPassword}>
          Forgot your password?
        </LinkText>

        <Divider>or</Divider>

        <Button 
          type="button" 
          onClick={handleSignUp}
          style={{backgroundColor: 'transparent', color: '#007bff', border: '1px solid #007bff'}}
        >
          Create New Account
        </Button>

        {/* Demo credentials for testing */}
        <div style={{marginTop: '20px', padding: '10px', background: '#f8f9fa', borderRadius: '5px'}}>
          <p style={{margin: '0 0 10px 0', fontSize: '12px', color: '#666'}}>
            Demo Credentials:
          </p>
          <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
            <button 
              type="button"
              onClick={() => fillDemoCredentials("user@example.com", "password123")}
              style={{padding: '5px 10px', fontSize: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer'}}
            >
              User
            </button>
            <button 
              type="button"
              onClick={() => fillDemoCredentials("admin@gym.com", "admin123")}
              style={{padding: '5px 10px', fontSize: '12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer'}}
            >
              Admin
            </button>
            <button 
              type="button"
              onClick={() => fillDemoCredentials("test@test.com", "test123")}
              style={{padding: '5px 10px', fontSize: '12px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer'}}
            >
              Test
            </button>
          </div>
        </div>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;