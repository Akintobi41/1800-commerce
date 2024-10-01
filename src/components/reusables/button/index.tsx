import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  styles?: string; 
}

const Button: React.FC<ButtonProps> = ({ children, styles = "", ...props }) => {
  return (
    <button className={`btn ${styles}`} {...props} aria-label={props['aria-label'] || "Button"}>
      {children}
    </button>
  );
};

export default Button;
