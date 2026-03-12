import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CustomInput, CustomSelect, CustomButton } from '../components';
import PhoneInput from '../components/PhoneInput';
import { Col, Row } from 'react-bootstrap';

interface SignUpFormData {
  businessType: string;
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  pan: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpFormData>({
    businessType: '',
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    pan: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVerify = (field: string) => {
    console.log(`Verifying ${field}...`);
    // Add verification logic here
  };

  const handleReset = () => {
    setFormData({
      businessType: '',
      fullName: '',
      email: '',
      mobile: '',
      password: '',
      pan: ''
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sign up form submitted:', formData);
    // Navigate to login after successful signup
    navigate('/login');
  };

  const businessTypeOptions: string[] = [
    'Sole Proprietor',
    'Private Limited',
    'Partnership',
    'LLP',
    'Public Limited'
  ];

  return (
    <div className="login_section">
      <div className="page-lines"></div>

      <div className="card">
        <div className="card-inner">          
          <div className="right">
            <div className="header">
              {/* <h1>Sign Up</h1>
              <p>We're so happy you're here, let's start by signing up.</p> */}
              <img src="/images/logo.png" alt="Logo" />
            </div>
                                    
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <CustomSelect
                    label="Business Type"
                    placeholder="Enter Business Type"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    options={businessTypeOptions}
                  />
                </Col>
                <Col md={6}>
                  <CustomInput
                    label="Full Name/Company Name"
                    type="text"
                    placeholder="Full Name/Company Name"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </Col>
                <Col md={6}>
                  <CustomInput
                    label="Email"
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    withVerify={true}
                    onVerifyClick={() => handleVerify('email')}
                  />
                </Col>
                <Col md={6}>
                  <PhoneInput
                    label="Mobile Number"
                    placeholder="Enter mobile number"
                    required
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    withVerify={true}
                    onVerifyClick={() => handleVerify('mobile')}
                  />
                </Col>
                <Col md={6}>
                  <CustomInput
                    label="Password"
                    type="password"
                    placeholder="Set Password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    showPasswordToggle={true}
                  />
                </Col>
                <Col md={6}>
                  <CustomInput
                    label="PAN"
                    type="text"
                    placeholder="Enter PAN number"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    withVerify={true}
                    onVerifyClick={() => handleVerify('PAN')}
                  />
                </Col>


              </Row>
             

              <div className="form-meta">
                <button 
                  type="button" 
                  className="link" 
                  onClick={handleReset}
                >
                  Reset Form?
                </button>
              </div>

              <CustomButton 
                type="submit" 
                variant="primary"
                fullWidth
              >
                Sign Up
              </CustomButton>
              
            </form>
            {/* <p className="terms">
              By creating an account, I accept the <Link to="/terms">Terms &amp; Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
            </p> */}

            <div className="card-bottom justify-content-center">
              <span className="already-text">Already Have an Account? <Link className="btn-signin" to="/login">Sign In</Link></span>              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
