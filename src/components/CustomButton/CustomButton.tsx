import React from 'react';
import './CustomButton.css';

/**
 * CustomButton Component
 * 
 * Available variants:
 * - 'primary': Filled primary button (blue background)
 * - 'primary-outline': Outline primary button (blue border)
 * - 'secondary': Filled secondary button (gold background)
 * - 'secondary-outline': Outline secondary button (gold border)
 * 
 * Usage:
 * <CustomButton variant="primary">Submit</CustomButton>
 * <CustomButton variant="primary-outline">Cancel</CustomButton>
 * <CustomButton variant="secondary">Save</CustomButton>
 * <CustomButton variant="secondary-outline">Delete</CustomButton>
 */

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'primary-outline' | 'secondary' | 'secondary-outline';
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  const getButtonClass = (): string => {
    let classes = 'custom-btn';
    
    if (variant === 'primary') {
      classes += ' btn-primary';
    } else if (variant === 'primary-outline') {
      classes += ' btn-primary-outline';
    } else if (variant === 'secondary') {
      classes += ' btn-secondary';
    } else if (variant === 'secondary-outline') {
      classes += ' btn-secondary-outline';
    }
    
    if (fullWidth) {
      classes += ' btn-full-width';
    }
    
    return `${classes} ${className}`;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={getButtonClass()}
      disabled={disabled}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
