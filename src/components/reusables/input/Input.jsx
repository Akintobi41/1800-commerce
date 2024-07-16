import React from "react";

const Input = React.forwardRef(function Input({ label, type = 'text', name, styles, ...props }, ref) {
  
  return (
    <section>
      {label && (<label htmlFor={label}>{ label}</label>)}
    <input type={type} name={name} className={styles} {...props} ref={ref} id={label} />
    </section>
  );

});

export default Input;
