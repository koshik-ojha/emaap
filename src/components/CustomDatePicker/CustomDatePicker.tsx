import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';

interface CustomDatePickerProps {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  disabled = false,
  className = '',
  placeholder = 'DD/MM/YYYY',
  minDate,
  maxDate,
}) => {
  const parseValue = (val?: string): Date | null => {
    if (!val) return null;
    const d = new Date(val);
    return isNaN(d.getTime()) ? null : d;
  };

  const handleChange = (date: Date | null) => {
    if (!onChange) return;
    const formatted = date
      ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
      : '';
    const syntheticEvent = {
      target: { name: name || '', value: formatted },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
  };

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label className="field-label">
          {label} {required && <span className="req">*</span>}
        </label>
      )}
      <div className="input-wrap datepicker-wrap">
        <DatePicker
          selected={parseValue(value)}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy"
          placeholderText={placeholder}
          disabled={disabled}
          minDate={minDate}
          maxDate={maxDate}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          autoComplete="off"
        />
        <span className="datepicker-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CustomDatePicker;
