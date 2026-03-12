import React from 'react';
import './CustomSelect.css';

interface SelectOption {
  label?: string;
  value?: string | number;
}

interface CustomSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options?: (SelectOption | string)[];
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ 
  label, 
  options = [],
  placeholder = 'Select an option',
  required = false,
  value,
  onChange,
  name,
  id,
  className = '',
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
      <div className="input-wrap">
        <select
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          disabled={disabled}
          {...props}
          className='form-select'
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => {
            const optionValue = typeof option === 'object' ? (option.value ?? '') : option;
            const optionLabel = typeof option === 'object' ? (option.label ?? '') : option;
            return (
              <option 
                key={index} 
                value={String(optionValue)}
              >
                {String(optionLabel)}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
