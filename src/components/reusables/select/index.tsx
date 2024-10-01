import React, { useId, forwardRef,SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  type: string;
  options: string[];
  label?: string;
  border?: string
  width?: string; 
  styles?: string;
  text?: string; 
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    type,
    options,
    label,
    border = "border-solid border-[1px]",
    width,
    styles,
    text,
    ...props
  },
  ref
) {
  const id = useId(); 
  return (
    <section className={`${width} flex flex-col`}>
      {label && (
        <label htmlFor={id} className="text-[.75rem] font-bold">
          {label}
        </label>
      )}
      <select
        className={`${styles} ${border}`}
        {...props}
        id={id}
        ref={ref} 
        defaultValue={text} 
      >
        {options.map((option) => (
          <option key={option} value={option} className="text-left">
            {option}
          </option>
        ))}
      </select>
    </section>
  );
});


export default Select;
