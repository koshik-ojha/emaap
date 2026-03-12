import React from 'react';
import './CustomTextarea.css';

interface CustomTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  className?: string;
  rows?: number;
  disabled?: boolean;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({ 
  label, 
  placeholder,
  required = false,
  value,
  onChange,
  name,
  id,
  className = '',
  rows = 3,
  disabled = false,
  ...props 
}) => {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label className="field-label">
          {label} {required && <span className="req">*</span>}
        </label>
      )}
      <div className="textarea-wrap">
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          rows={rows}
          disabled={disabled}
          {...props}
        />
      </div>
    </div>
  );
};

export default CustomTextarea;
