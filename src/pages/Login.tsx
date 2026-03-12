import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CustomInput, CustomButton } from '../components';

interface LoginFormData {
  pan: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    pan: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    // Navigate to dashboard after successful login
    navigate('/dashboard');
  };

  return (
    <div className="login_section sign_in_form">
      <div className="page-lines"></div>

      <div className="card">
        <div className="card-inner">
          <div className="right">
            <div className="header">
              {/* <h1>Sign In</h1>
              <p>To access your dashboard and apply for approvals.</p> */}
              <img src="/images/logo.png" alt="Logo" />
            </div>
            
            <form onSubmit={handleSubmit}>
              
              <CustomInput
                label="PAN"
                type="text"
                placeholder="Enter PAN"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
              />

              <CustomInput
                label="Email"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <CustomInput
                label="Password"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                showPasswordToggle={true}
              />
              <div className="form-meta">
                <Link to="/forgot-password" className="link">Forgot Password</Link>
              </div>

              <CustomButton 
                type="submit" 
                variant="primary"
                fullWidth
              >
                Sign In
              </CustomButton>

              
            </form>

            <div className="card-bottom justify-content-center">
              <span className="already-text">Don't have an account? <Link className="btn-signin" to="/signup">Sign Up Now</Link></span>              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
