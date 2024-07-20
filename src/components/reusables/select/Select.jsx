/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { type,options, label, styles, ...props },
  ref,
) {
  const id = useId();
  // console.log(options)

  return (
    <section className="w-full">
      {" "}
      {label && (
        <label htmlFor={id} className="">
          {label}{" "}
        </label>
      )}
      <select
        className={styles}
        {...props}
        id={id}
        ref={ref}
      >
        {" "}
        {options?.map((option,i) => (
            <option key={option}  value={option} >{ type === 'products' ? option : type === 'signup' ? option : type === 'birthday' ? option : ''}</option>
        ))}{" "}
      </select>
    </section>
  );
});

export default Select;
// disabled={i === 0 && type !== 'birthday' ? 'disabled' : ''}
// className={`${i === 0  ? 'opacity-30 bg-slate-400' : ''}`}