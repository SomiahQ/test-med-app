import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // State to handle form input values
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // State to handle validation errors
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate the form inputs
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with form submission logic (e.g., API call)
      console.log('Login successful');
    }
  };

  return (
    <div className="login-page">

    <div className="container">
      <div className="login">
        <h1>Login</h1>
        <div className="login-text1">
          Are you a new member? <span><a href="../Sign_Up/Sign_Up.html">Sign Up Here</a></span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="btn-group">
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="reset" className="btn btn-danger">Reset</button>
          </div>
        </form>

        <div className="login-text">
          Forgot Password?
        </div>
      </div>
    </div>
    </div>

  );
};

export default Login;