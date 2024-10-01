import React, { FC, InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  border?: string,
  height?: string,
  icon?: ReactNode, 
  styles?: string; 
}

const Input: FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(({
  label,
  type = 'text',
  name,
  border = 'border-[1px]',
  height = 'h-[48px]',
  icon = null,
  styles = '',
  ...props
}, ref) => {
  
  return (
    <section className="relative">
      {label && <label htmlFor={name} className="block mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        ref={ref}
        className={`w-full outline-none ${height} ${border} ${styles}`}
        {...props}
        id={name}
      />
      {icon}
    </section>
  );
});


export default Input;
