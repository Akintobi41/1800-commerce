import React from "react";

const Input = React.forwardRef(function Input({ label, type = 'text', name, styles, ...props }, ref) {
  
  return (
    <input type={type} name={name} className={styles} {...props} ref={ref} />
  );

});

export default Input;
