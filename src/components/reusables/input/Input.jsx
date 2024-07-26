import React from "react";

const Input = React.forwardRef(function Input({ label, type = 'text', name,border = 'border-[1px]', height = 'h-[48px]',icon= null, styles, ...props }, ref) {
  
  return (
    <section className="relative">
      {label && (<label htmlFor={label}>{ label}</label>)}
      <input type={type} name={name} className={`w-full outline-none ${height} ${border} ${styles}`} {...props} ref={ref} id={label} />
      {icon}
    </section>
  );

});

export default Input;
