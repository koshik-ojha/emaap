import React from 'react';
import './CustomInput.css';

interface CustomInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  className?: string;
  withVerify?: boolean;
  onVerifyClick?: () => void;
  verifyButtonText?: string;
  disabled?: boolean;
  showPasswordToggle?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  label, 
  type = 'text', 
  placeholder, 
  required = false,
  value,
  onChange,
  name,
  id,
  className = '',
  withVerify = false,
  onVerifyClick,
  verifyButtonText = 'Verify',
  disabled = false,
  showPasswordToggle = false,
  ...props 
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPasswordToggle && type === 'password' 
    ? (showPassword ? 'text' : 'password') 
    : type;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label className="field-label">
          {label} {required && <span className="req">*</span>}
        </label>
      )}
      <div className="input-wrap">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          className={withVerify ? 'with-verify' : ''}
          disabled={disabled}
          {...props}
        />
        
        {showPasswordToggle && type === 'password' && (
          <button 
            type="button" 
            className="eye-btn" 
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
          >
            <svg 
              width="17" 
              height="17" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        )}
        
        {withVerify && (
          <button 
            type="button" 
            className="btn-verify" 
            onClick={onVerifyClick}
          >
            {verifyButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
