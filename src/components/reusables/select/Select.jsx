/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { type,options, label, styles, ...props },
  ref,
) {
  const id = useId();
  // console.log(options)

  return (
    <div className="w-full">
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
            <option key={option} disabled={i === 0 && type !== 'birthday' ? 'disabled' : ''} value={option} className={`${i === 0  ? 'opacity-30 bg-slate-400' : ''}`}>{ type === 'products' ? option : type === 'signup' ? option : type === 'birthday' ? option : ''}</option>
        ))}{" "}
      </select>
    </div>
  );
});

export default Select;
