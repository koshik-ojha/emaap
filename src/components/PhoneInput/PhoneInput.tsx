import React from 'react';
import './PhoneInput.css';

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  withVerify?: boolean;
  onVerifyClick?: () => void;
  verifyButtonText?: string;
  countryCode?: string;
  countryFlag?: string;
  disabled?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ 
  label, 
  placeholder,
  required = false,
  value,
  onChange,
  name,
  id,
  withVerify = false,
  onVerifyClick,
  verifyButtonText = 'Verify',
  countryCode = '+91',
  countryFlag = '🇮🇳',
  disabled = false,
  ...props 
}) => {
  return (
    <div className="form-group">
      {label && (
        <label className="field-label">
          {label} {required && <span className="req">*</span>}
        </label>
      )}
      <div className="phone-wrap">
        <div className="phone-prefix">
          {/* <span>{countryFlag}</span> */}
          <span className="code">{countryCode}</span>
        </div>
        <div className="input-wrap">
          <input
            type="tel"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
            className={withVerify ? 'with-verify' : ''}
            disabled={disabled}
            {...props}
          />
          
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
    </div>
  );
};

export default PhoneInput;
